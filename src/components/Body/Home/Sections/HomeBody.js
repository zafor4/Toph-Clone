import React from "react";
import COntests from "./COntests";

const HomeBody = (props) => {
  console.log(props);
  return (
    <div className=" tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between md:tw-px-6 tw-text-center tw-mt-10 tw-pt-10 tw-bg-slate-300">
      <div>
        <h4>
          Practice to <strong>Level Up </strong>,Compete for{" "}
          <strong>Glory</strong>
        </h4>

        <div>
          <div className="tw-mt-12">
            <h5>{props.data.gloryData.totalProblems}</h5>
            <p>Problem to practice</p>
          </div>
          <div className="tw-mt-12">
            <h5>Hundreds</h5>
            <p>of Contests Headed</p>
          </div>
          <div className="tw-mt-12">
            <h5>{props.data.gloryData.AcceptedSolutions}</h5>
            <p>Accepted Solutions</p>
          </div>

          <div className="tw-mt-12">
            <h5>{props.data.gloryData.totaalSubmissions}</h5>
            <p>Submission Since 2015</p>
          </div>
          <div className="tw-mt-12">
            <h5>{props.data.gloryData.problemTutorial}</h5>
            <p>Problem Tutorials</p>
          </div>
          <div className="tw-mt-12">
            <h5>{props.data.gloryData.programmingLanguages}</h5>
            <p>Programming Languages</p>
          </div>
        </div>
      </div>

      <COntests />
    </div>
  );
};

export default HomeBody;
