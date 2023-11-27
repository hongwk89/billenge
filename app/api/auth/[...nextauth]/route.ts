import NextAuth, { TokenSet } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET as string,
      authorization: { params: { access_type: "offline", prompt: "consent" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        return {
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
          profile,
        };
      } else if (Date.now() > (token.expires_at as number) * 1000) {
        try {
          const response = await fetch("https://oauth2.googleapis.com/token", {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              clientId: process.env.GOOGLE_OAUTH_ID as string,
              clientSecret: process.env.GOOGLE_OAUTH_SECRET as string,
              grant_type: "refresh_token",
              refresh_token: token.refresh_token as string,
            }),
            method: "POST",
          });

          const tokens: TokenSet = await response.json();

          if (!response.ok) throw tokens;

          return {
            ...token,
            access_token: tokens.access_token,
            expires_at: Date.now() / 1000 + (tokens.expires_in as number),
          };
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" as const };
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.access_token as string;
      session.user = token.profile as any;
      session.error = token.error as string;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
