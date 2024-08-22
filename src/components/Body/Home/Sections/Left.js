import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Progress } from "reactstrap"; // Ensure you have the correct import for Progress




const findratioOFSolution=(totalProblems,totalSolved)=>{
  return (totalSolved*100)/totalProblems

}

const Left = (props) => {
console.log(props)
  return (
    <div className="tw-p-4 md:tw-p-0 tw-flex tw-flex-col md:tw-w-3/4">
      {/* div1 */}
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="tw-my-4 tw-text-end tw-py-6 tw-pe-6 tw-w-full tw-border hover:tw-border-blue-700 tw-rounded-md">
          <h3 className="tw-font-normal">Unrated</h3>
          <p>Hello</p>
        </div>

        <div className="md:tw-mx-10 tw-my-4 tw-text-end tw-py-6 tw-pe-6 tw-w-full tw-border hover:tw-border-blue-700 tw-rounded-md">
          <h3 className="tw-font-normal">0/{props.totalProblems}</h3>
          <p>Problems Solved</p>
        </div>

        <div className="tw-my-4 tw-text-end tw-py-6 tw-pe-6 tw-w-full tw-border hover:tw-border-blue-700 tw-rounded-md">
          <h3 className="tw-font-normal">Unrated</h3>
          <p>Hello</p>
        </div>
      </div>

      {/* div2 */}
      <div className="tw-my-10 tw-border tw-rounded-md hover:tw-border-blue-700 tw-p-4">
        <Progress className="tw-my-2" value={findratioOFSolution(props.totalProblemsEasy,props.totalSolvedEasy)}>
        {findratioOFSolution(props.totalProblemsEasy,props.totalSolvedEasy)}%
        </Progress>
        <Progress className="tw-my-2" value={findratioOFSolution(props.totalProblemsMedium,props.totalSolvedMedium)}>
        {findratioOFSolution(props.totalProblemsMedium,props.totalSolvedMedium)}%
        </Progress>
        <Progress className="tw-my-2" value={13}>
          
        </Progress>
      </div>

      {/* div3 */}
      <div className="tw-my-5 tw-p-4 tw-border tw-rounded-md hover:tw-border-blue-700">
        <h4>Rating History</h4>
        <p>No rating</p>
      </div>

      {/* div5 */}
      <div className="tw-my-10 tw-flex tw-flex-col md:tw-flex-row md:tw-justify-around">
        <div className="tw-border tw-rounded-md">
          <BarChart
            xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={300}
            height={200}
          />
        </div>

        <div className="tw-my-5 tw-border tw-rounded-md">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={300}
            height={200}
          />
        </div>
      </div>

      {/* div 4 */}
      <div className="tw-my-10 tw-border tw-rounded-md tw-p-4 tw-border-green-500">
        <h4>Update Your Profile</h4>
        <p>Are you based in Dhaka, Bangladesh?</p>
        <button type="button" className="btn btn-primary btn-sm">Update</button>
      </div>
    </div>
  );
};

export default Left;
