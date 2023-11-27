import Image from "next/image";
import PopupButton from "./PopupButton";

export default function ConnectPopup({ closePopup }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[.7] z-10">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 whitespace-nowrap text-center rounded-[30px]">
        <h5 className="text-lg font-bold">연결에 성공했어요!</h5>
        <div className="flex justify-center py-6">
          <Image src="/images/connect.png" alt="" width={74} height={65} />
        </div>
        <p className="text-sm mb-6">
          계정 소유가 불분명하거나
          <br />
          미션 조건이 충족되지 않은 경우
          <br />
          리워드가 지급되지 않습니다
        </p>
        <div className="flex justify-between gap-[5px]">
          <PopupButton name="cancel" closePopup={closePopup} />
          <PopupButton name="confirm" closePopup={closePopup} />
        </div>
      </div>
    </div>
  );
}
