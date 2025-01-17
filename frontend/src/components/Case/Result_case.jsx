import {useState} from "react";
import {SquareCheckBig, SquareTerminal} from "lucide-react";
import {motion} from "framer-motion";

import TestCase from "./TestCase";
import TestResult from "./TestResult";

/*

input sample format


const cases = [
  {m: "2", n: "3", output: "6"},
  {enemyEngines: "[3,2,2]", currentEnergy: "4", output: "7"},
  {enemyEngines: "[3,4,2]", currentEnergy: "9", output: "6"},
];

const results = [
  {caseId: 1, result: "false"},
  {caseId: 2, result: "null"},
  {caseId: 3, result: "null"},
];

const expectedResults = [
  {caseId: 1, result: "true"},
  {caseId: 2, result: "null"},
  {caseId: 3, result: "null"},
];
 */

function Result_case({cases, results, expectedResults}) {
  const [optionToggle, setToggle] = useState("case");

  return (
    <div className="bg-darkGray w-full h-full flex flex-col rounded-sm gap-4">
      <div
        className="flex gap-4 pl-[1rem] pt-[5px] items-center pb-[5px] 
      rounded bg-secondaryGray relative"
      >
        {" "}
        <motion.div
          className="absolute bottom-1 w-[4rem]  h-[2px] bg-textGreen"
          initial={{left: 40}}
          animate={{
            left: optionToggle === "case" ? 40 : 180,
          }}
          transition={{type: "spring", damping: 15}}
        ></motion.div>
        <button
          className={`p-[7px] bg-transparent rounded-none font-[500] flex text-sm `}
          onClick={() => setToggle("case")}
        >
          <span className="mr-2 flex text-textGreen w-3 h-3 ">
            <SquareCheckBig />
          </span>
          <p className="text-gray-300 ">TestCase</p>
        </button>
        <div className="w-[1px] h-5/6 bg-slate-500"></div>
        <button
          className={`p-[7px] bg-transparent rounded-none font-[500] flex text-sm `}
          onClick={() => setToggle("result")}
        >
          <span className="mr-2 flex text-textGreen w-3 h-3">
            <SquareTerminal />
          </span>
          <p className="text-gray-300">TestResult</p>
        </button>
      </div>

      {optionToggle == "case" ? (
        <TestCase testCases={cases} />
      ) : (
        <TestResult results={results} expectedResults={expectedResults} />
      )}
    </div>
  );
}

export default Result_case;
