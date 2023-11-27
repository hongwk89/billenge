import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import HeaderWrap from "@/components/header/HeaderWrap";
import Providers from "@/components/Providers";
import AuthSession from "@/components/AuthSession";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billenge",
  description: "빌린지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-main-bg-color ${roboto.className}`}>
        <AuthSession>
          <Providers>
            <HeaderWrap />
            {children}
          </Providers>
        </AuthSession>
      </body>
    </html>
  );
}
