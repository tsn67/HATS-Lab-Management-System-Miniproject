/* eslint-disable react/prop-types */
/* const result = [
  {caseId: 1, result: "true"},
  {caseId: 2, result: "null"},
  {caseId: 3, result: "null"},
];

//{caseId: 1, result: "true"},
//{caseId: 2, result: "compiler error 😼😼😼"},
//{caseId: 3, result: "Correct result 🫂🫂🫂"},
const expectedResult = [
  {caseId: 1, result: "true"},
  {caseId: 2, result: "null"},
  {caseId: 3, result: "null"},
]; */

function TestResult({results, expectedResults}) {
  return (
    <div className=" ml-3 pr-8 mt-6  overflow-y-scroll scrollbar-thin scrollbar-thumb-buttonGray scrollbar-track-backgroundRed">
      <main className=" flex flex-col gap-5 mb-6">
        {results?.length > 0 ? (
          results.map((item) => {
            const expect_item_result = expectedResults.find(
              (thing) => thing.caseId === item.caseId
            ).result;

            return (
              <section
                key={item.caseId}
                className={`py-3 px-2 text-sm bg-buttonGray rounded-lg flex flex-col gap-4 relative`}
              >
                <Tag expect_item_result={expect_item_result} item={item} />
                <span
                  className={`bg-darkGray p-2 rounded-lg w-fit text-sm text-gray-300 
              ${
                expect_item_result == item.result
                  ? "ring-2 ring-textGreen"
                  : "ring-2 ring-textRed"
              } `}
                >
                  Case {item.caseId}
                </span>
                <div className="bg-darkGray p-2 rounded-lg min-h-[7rem] text-sm">
                  {item.result}
                </div>
              </section>
            );
          })
        ) : (
          <RunTheCode />
        )}
      </main>
    </div>
  );
}

function RunTheCode() {
  return (
    <div className=" text-center relative">
      <p className="text-gray-300">Run the Code to Obtain Results</p>
      <span className="w-[40%] h-[2px] left-[30%] bg-red-700 absolute "> </span>
    </div>
  );
}
function Tag({expect_item_result, item}) {
  const result = expect_item_result == item.result;

  return (
    <div
      className={`absolute top-3 right-6 text-sm bg-secondaryGray px-2 py-1 rounded-lg ${
        !result ? "text-textRed" : "text-textGreen"
      } `}
    >
      {result ? "Passed" : "Failed"}
    </div>
  );
}

export default TestResult;
