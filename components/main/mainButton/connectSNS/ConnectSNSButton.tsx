import { useState } from "react";

const default_text = "SNS 영상 연결하기";

export default function ConnectSNSButton({
  connected,
  openPopup,
  userSNS_popup,
}) {
  const [btn, setBtn] = useState({ class: "", value: default_text });

  const handleChange = (e) => {
    setBtn((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleFocus = () => {
    setBtn({ class: "on", value: "" });
  };

  const handleBlur = () => {
    setBtn({ class: "", value: default_text });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (false) {
      setBtn({ class: "error", value: "유효한 링크를 복사한 후 클릭하세요" });

      return;
    }

    openPopup();
    userSNS_popup();
  };

  const handleClick = () => {};

  return (
    <>
      <div
        className={`relative flex items-center rounded-full bg-main-color w-full h-16 px-6 ${btn.class} [&.on_.line]:w-[80%] [&.error_input]:text-[#FF2E00] [&.error_input]:tracking-tighter`}
      >
        {connected ? (
          <div className="flex justify-between w-full" onClick={handleClick}>
            <span className="text-xl">userId</span>
            <span className="text-xl font-bold">000,000,000</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="block w-full">
              <input
                type="text"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={btn.value}
                className="text-center text-main-b font-bold text-lg w-full bg-transparent outline-0 "
              />
            </form>
            <div className="line absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-4 w-0 h-[1px] bg-black transition-all"></div>
          </>
        )}
      </div>
    </>
  );
}
