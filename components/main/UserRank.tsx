import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";
import convertToCount from "@/utils/convertToCount";
import Link from "next/link";

const noto = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});

export default function UserRank({ data, challenge }) {
  return (
    <li className="mb-2 [&:last-child]:mb-0">
      <Link
        href={`/detailPage/${data.user_id}/${challenge}`}
        className={`flex gap-4 text-white items-center ${noto.className}`}
      >
        <span>{data.rank}위</span>
        <span className="block rounded-full">
          <Image src={data.image} alt="유저 아이콘" width={50} height={50} />
        </span>
        <span>{data.user_id}</span>
        <span className="ml-auto text-main-color">
          {convertToCount(data.views)}
        </span>
      </Link>
    </li>
  );
}
