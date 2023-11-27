"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function GoogleLoginButton() {
  const { data: session } = useSession();

  if (session) {
    redirect("/");
  }

  return (
    <button
      type="button"
      className="flex gap-5 items-center rounded-full bg-white w-full h-14 px-6"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      <Image src="/images/google.png" alt="구글로고" width={26} height={27} />
      <span className="block w-px h-12 bg-[#6F7B82]"></span>
      <span className="block text-xl text-main-bg-color font-bold tracking-tight">
        Google로 시작하기
      </span>
    </button>
  );
}
