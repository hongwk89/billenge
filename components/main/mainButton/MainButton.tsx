import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import ConnectSNS from "./connectSNS/ConnectSNS";

export default function MainButton() {
  const query = useSearchParams().get("challenge");
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed bottom-0 z-10 w-full px-5 py-10 bg-gradient-to-t from-main-bg-color via-main-bg-color to-transparent">
      {session !== undefined &&
        (session === null ? (
          <Link
            href={`/login?returnUrl=/?challenge=${query}`}
            className="flex justify-center items-center rounded-full text-main-bg-color bg-main-color w-full h-16 font-bold text-lg"
          >
            로그인하고 SNS 영상 연결하기
          </Link>
        ) : (
          <ConnectSNS
            openPopup={openPopup}
            closePopup={closePopup}
            showPopup={showPopup}
          />
        ))}
    </div>
  );
}
