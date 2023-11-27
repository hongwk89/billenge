"use client";
import share from "@/utils/share";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function MainTop({ data, handleToggle }) {
  const param = useSearchParams().get("challenge");
  const day = Math.ceil(
    (new Date(data.condition.expire).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const dday = day < 0 ? 0 : Math.abs(day);

  return (
    <div className="relative">
      <div className="relative flex justify-center pt-[100%] after:block after:absolute after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t after:from-main-bg-color after:to-transparent">
        <Image src={data.image} alt={data.title} fill priority />
      </div>
      <div className="absolute bottom-8 w-full text-center">
        <h3 className="flex justify-center items-center font-bold text-white text-xl">
          {data.title} 챌린지
          <button type="button" className="ml-1" onClick={handleToggle}>
            <Image
              src="/images/search.png"
              alt="설명보기"
              width="24"
              height="24"
            />
          </button>
        </h3>
        <ul className="flex justify-center gap-1 text-white text">
          <li>+{data.condition.views}</li>
          <li>|</li>
          <li>{data.condition.money}￦</li>
          <li>|</li>
          <li>D-{dday}</li>
        </ul>
        <button
          type="button"
          className="absolute bottom-2 right-5"
          onClick={() =>
            share(
              "url이",
              (process.env.NEXT_PUBLIC_DOMAIN +
                "/?challenge=" +
                param) as string
            )
          }
        >
          <Image
            src="/images/share.png"
            alt="공유하기"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  );
}
