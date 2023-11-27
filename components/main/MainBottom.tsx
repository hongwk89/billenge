import convertToCount from "@/utils/convertToCount";
import Explain from "./Explain";
import UserRank from "./UserRank";

export default function MainBottom({
  data,
  challenge,
  explain,
  explainToggle,
  handleToggle,
}) {
  return (
    <>
      <div className="relative overflow-hidden px-5 pb-32">
        <div>
          <ul className={`py-5 border-solid border-b border-main-color`}>
            {data.map((list, idx: number) => (
              <UserRank key={idx} data={list} challenge={challenge} />
            ))}
          </ul>
          <div className="flex justify-between pt-5">
            <span className="text-white">전체조회수</span>
            <span className="text-main-color">
              {convertToCount(
                data.reduce((tot: number, cur) => tot + cur.views, 0)
              )}
            </span>
          </div>
        </div>
        <Explain explain={explain} handleToggle={handleToggle} explainToggle={explainToggle}/>
      </div>
    </>
  );
}
