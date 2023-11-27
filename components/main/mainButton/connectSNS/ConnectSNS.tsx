import { useState } from "react";
import ConnectPopup from "./ConnectPopup";
import ConnectSNSButton from "./ConnectSNSButton";
import UserSNSPopup from "./UserSNSPopup";

export default function ConnectSNS({ openPopup, closePopup, showPopup }) {
  const [connected, setConnected] = useState(false);

  const userSNS_popup = () => {
    setConnected(true);
  };

  return (
    <>
      <ConnectSNSButton
        openPopup={openPopup}
        connected={connected}
        userSNS_popup={userSNS_popup}
      />
      {showPopup && <ConnectPopup closePopup={closePopup} />}
      {connected && <UserSNSPopup />}
    </>
  );
}
