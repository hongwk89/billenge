"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import MainButton from "@/components/main/mainButton/MainButton";
import MainSlide from "@/components/main/MainSlide";

// Import Swiper styles
import "swiper/css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

const test_data = [
  {
    challenge: {
      title: "아무노래",
      image: "images/test_album3.jpg",
      condition: { views: 5000, money: 10, expire: "2023-09-15" },
    },
    explain:
      "<h5>1빌린지</h5><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p><br/><h5>빌린지</h5><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p>",
    user_list: [
      { rank: 1, image: "/images/user1.png", user_id: "asdf23", views: 122323 },
      {
        rank: 2,
        image: "/images/user2.png",
        user_id: "fg4gh3334",
        views: 64545,
      },
      { rank: 3, image: "/images/user3.png", user_id: "ryjn1", views: 34544 },
      { rank: 4, image: "/images/user1.png", user_id: "asdf23", views: 122323 },
      {
        rank: 5,
        image: "/images/user2.png",
        user_id: "fg4gh3334",
        views: 64545,
      },
      { rank: 6, image: "/images/user3.png", user_id: "ryjn1", views: 34544 },
    ],
  },
  {
    challenge: {
      title: "무슨노래",
      image: "images/test_album3.jpg",
      condition: { views: 5000, money: 10, expire: "2023-09-15" },
    },
    explain:
      "<h5>2빌린지</h5><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p><br/><h5>빌린지</h5><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p><p>aaaaaaa asdas as asdasd</p>",
    user_list: [
      { rank: 1, image: "/images/user1.png", user_id: "asdf23", views: 122323 },
      {
        rank: 2,
        image: "/images/user2.png",
        user_id: "fg4gh3334",
        views: 64545,
      },
      { rank: 3, image: "/images/user3.png", user_id: "ryjn1", views: 34544 },
      { rank: 4, image: "/images/user1.png", user_id: "asdf23", views: 122323 },
      {
        rank: 5,
        image: "/images/user2.png",
        user_id: "fg4gh3334",
        views: 64545,
      },
      { rank: 6, image: "/images/user3.png", user_id: "ryjn1", views: 34544 },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const setQuery = (idx: number) => {
    // url 파라미터 변경
    router.push(
      pathname +
        "?" +
        createQueryString("challenge", test_data[idx].challenge.title)
    );
  };

  useEffect(() => {
    setQuery(0);
  }, []);

  return (
    <main>
      <Swiper
        className="mySwiper"
        onSlideChange={(swiper) => setQuery(swiper.activeIndex)}
      >
        {test_data.map((data, idx) => (
          <SwiperSlide key={idx}>
            <MainSlide data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <MainButton />
    </main>
  );
}
