import Image from "next/image";

export default function UserSNSPopup() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[.7] z-10">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 whitespace-nowrap text-center rounded-[30px]">
        <h5 className="text-lg font-bold">연결중인 플랫폼</h5>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button type="button">
          <Image
            src={`/images/confirm.png`}
            alt="확인"
            width={27}
            height={27}
            className="mr-3"
          />
        </button>
      </div>
    </div>
  );
}
