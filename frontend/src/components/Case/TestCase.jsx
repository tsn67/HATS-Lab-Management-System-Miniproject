/* eslint-disable react/prop-types */
import {useState} from "react";

/* const cases = [
  {m: "2", n: "3", output: "6"},
  {enemyEngines: "[3,2,2]", currentEnergy: "4", output: "7"},
  {enemyEngines: "[3,4,2]", currentEnergy: "9", output: "6"},
];
 */
function TestCase({testCases = []}) {
  //cases format:array  of objects [{},{},{}]

  const [index, setIndex] = useState(0);

  const handleButtonClick = (i) => {
    setIndex(i);
  };

  return (
    <div
      className="pl-[min(25px,2vw)] pt-2 pb-4  overflow-y-scroll  scrollbar-thin scrollbar-thumb-buttonGray
     scrollbar-track-backgroundRed mb-4"
    >
      <section className="flex flex-wrap gap-4">
        {testCases.map((item, i) => (
          <button
            key={i}
            className={`font-medium text-center bg-secondaryGray px-2 text-gray-400 
        py-1 border-none rounded-lg cursor-pointer text-sm
        focus:outline-none focus:ring-1 
        ${index === i ? "ring-1 ring-textGreen" : ""}
                   
            `}
            onClick={() => handleButtonClick(i)}
          >
            Case {i + 1}
          </button>
        ))}
      </section>
      <section className="mt-5 flex flex-col  text-sm gap-4">
        {testCases.map((item, i) => {
          if (i == index)
            return Object.entries(item).map(([key, value]) => (
              <div
                className=" flex flex-col gap-2 text-slate-300   max-w-[80%]"
                key={key}
              >
                <span>{key + " ="}</span>
                <p className="bg-secondaryGray py-1 px-5 rounded-lg">{value}</p>
              </div>
            ));
        })}
      </section>
    </div>
  );
}

export default TestCase;
