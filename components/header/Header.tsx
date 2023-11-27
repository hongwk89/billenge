"use client";
import useChallenge from "@/hooks/useChallenge";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [on, setOn] = useState(false);
  const { challenge } = useChallenge();
  const pathname = usePathname();

  const toggleChallengeInfo = () => {
    setOn((prev) => !prev);
  };

  return (
    <div className="h-16">
      <div className="fixed top-0 w-full z-10 bg-main-bg-color h-16 pl-5 pr-2 flex justify-between items-center">
        <div className="w-28">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width="165"
              height="45"
              alt="빌린지 로고"
              priority
            />
          </Link>
        </div>
        <div
          className={`group relative flex justify-between items-center gap-3 ${
            on ? "on" : ""
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex gap-3 text-white ease-in-out duration-300 translate-x-full group-[.on]:translate-x-0">
              <Link href="/mybillenge">Mybillenge</Link>
              <Link href="/mypage">Mypage</Link>
            </div>
          </div>
          {pathname.includes("detailPage") && (
            <div className="absolute right-10 overflow-hidden">
              <h3 className="text-white font-bold ease-in-out duration-300 translate-x-0 group-[.on]:translate-x-full">
                {challenge}
              </h3>
            </div>
          )}
          <button
            type="button"
            className="flex gap-1 flex-col items-center w-7 h-7 ease-in-out duration-300 group-[.on]:rotate-[-90deg]"
            onClick={toggleChallengeInfo}
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-main-color"></span>
            <span className="block w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="block w-1.5 h-1.5 rounded-full bg-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
