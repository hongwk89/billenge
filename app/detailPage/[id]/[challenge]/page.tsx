"use client";
import useChallenge from "@/hooks/useChallenge";
import { Noto_Sans_KR } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";

const test_data = {
  user_id: "dasfag",
  user_image: "/images/user2.png",
  views: 23423,
  challenge: "아무노래",
  youtube: "https://youtube.com/shorts/HfHdgNbfxzk",
  insta: "",
  tiktok: "",
};

const noto = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});

export default function DetailPage({ params }) {
  const { setChallenge } = useChallenge();
  const youtube_id = test_data.youtube.split("shorts/")[1];

  useEffect(() => {
    setChallenge(decodeURIComponent(params.challenge));
  }, [params.challenge]);

  return (
    <>
      <div className="px-5">
        <iframe
          className="w-full h-[calc(100vh-17rem)]"
          src={`https://www.youtube.com/embed/${youtube_id}?loop=1&playlist=${youtube_id}&rel=0`}
        ></iframe>
        <div className="h-52 pt-7 pb-10">
          <div className="flex items-center gap-3">
            <span className="w-[50px] h-[50px] rounded-full">
              <Image
                src={test_data.user_image}
                alt={test_data.user_id}
                width={50}
                height={50}
              />
            </span>
            <div className="text-white">
              <span className={`block ${noto.className} text-xl font-bold`}>
                {test_data.user_id}
              </span>
              <span className="block text-sm">views:{test_data.views}</span>
            </div>
            <div className="ml-auto">
              {test_data.youtube && (
                <a
                  target="_blank"
                  href={test_data.youtube}
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/youtube.png"
                    alt="유튜브"
                    width={32}
                    height={22}
                  />
                </a>
              )}
              {test_data.insta && (
                <a
                  target="_blank"
                  href={test_data.insta}
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/insta.png"
                    alt="인스타"
                    width={29}
                    height={29}
                  />
                </a>
              )}
              {test_data.tiktok && (
                <a
                  target="_blank"
                  href={test_data.tiktok}
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/tiktok.png"
                    alt="틱톡"
                    width={23}
                    height={27}
                  />
                </a>
              )}
            </div>
          </div>
          <div className="mt-7">
            <button
              type="button"
              className="flex justify-center items-center rounded-full text-main-bg-color bg-main-color w-full h-16 font-bold text-lg"
            >
              나도 SNS 영상 연결하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
