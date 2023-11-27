import Image from "next/image";

export default function PopupButton({ name, closePopup }) {
  const border_color =
    name === "confirm" ? "border-[#1BC200]" : "border-[#DC1010]";
  const name_kor = name === "confirm" ? "확인" : "취소";

  return (
    <button
      type="button"
      className={`flex items-center w-full text-sm font-bold p-[5px] border rounded-full ${border_color}`}
      onClick={closePopup}
    >
      <Image
        src={`/images/${name}.png`}
        alt={name_kor}
        width={27}
        height={27}
        className="mr-3"
      />
      {name_kor}
    </button>
  );
}
