import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

export default function Explain({ explain, handleToggle, explainToggle }) {
  const cleaned_explain = DOMPurify.sanitize(explain);

  return (
    <div
      className={`absolute ${
        explainToggle && "top-[0]"
      } top-[-100%] left-0 w-full h-full z-5 bg-main-bg-color text-white p-5 pb-0 transition-all duration-300`}
    >
      <h4 className="relative font-bold text-xl text-center mb-4">
        Challenge Name
        <button
          type="button"
          className="absolute top-1/2 right-0 translate-y-[-50%]"
          onClick={handleToggle}
        >
          <Image src="/images/up_arrow.png" alt="" width={24} height={24} />
        </button>
      </h4>
      <div dangerouslySetInnerHTML={{ __html: cleaned_explain }}></div>
    </div>
  );
}
