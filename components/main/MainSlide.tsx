import { useState } from "react";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";

export default function MainSlide({ data }) {
  const [explainToggle, setExplainToggle] = useState(false);

  const handleToggle = () => {
    setExplainToggle((prev) => !prev);
  };

  return (
    <>
      <MainTop data={data.challenge} handleToggle={handleToggle} />
      <MainBottom
        data={data.user_list}
        challenge={data.challenge.title}
        explain={data.explain}
        explainToggle={explainToggle}
        handleToggle={handleToggle}
      />
    </>
  );
}
