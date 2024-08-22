import React from "react";
import Home1 from '../../../../assets/images/home1.png';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import COntests from "./COntests";


const mapStateToProps = (state) => {
  return {
    token: state.token,
    totalProblems: state.DATA.gloryData.totalProblems,
    acceptedSolutions: state.DATA.gloryData.AcceptedSolutions,
    totalSubmissions: state.DATA.gloryData.totalSubmissions,
    problemTutorials: state.DATA.gloryData.problemTutorial,
    programmingLanguages: state.DATA.gloryData.programmingLanguages,
    contestData: state.DATA.contestData,
  };
};

const Middle = (props) => {
  const navigate = useNavigate();
  const route = props.token ? "/contests" : "/authentication";

  const handleJoinToph = () => {
    navigate(route);
  };

  return (
    <div>
      <div className="tw-bg-slate-300">
        <div className="container tw-flex tw-flex-col md:tw-flex-row md:tw-justify-around tw-text-center tw-mt-10 tw-pt-10">
          <div>
            <h4 className="md:tw-relative md:tw-left-2/4">
              Practice to <strong>Level Up</strong>, Compete for <strong>Glory</strong>
            </h4>

            <div className="md:tw-grid md:tw-grid-cols-2 md:tw-gap-4">
              <div className="tw-mt-20">
                <h5>{props.totalProblems}</h5>
                <p>Problems to Practice</p>
              </div>
              <div className="tw-mt-20">
                <h5>Hundreds</h5>
                <p>of Contests Held</p>
              </div>
              <div className="tw-mt-20">
                <h5>{props.acceptedSolutions}</h5>
                <p>Accepted Solutions</p>
              </div>
              <div className="tw-mt-20">
                <h5>{props.totalSubmissions}</h5>
                <p>Submissions Since 2015</p>
              </div>
              <div className="tw-mt-20">
                <h5>{props.problemTutorials}</h5>
                <p>Problem Tutorials</p>
              </div>
              <div className="tw-mt-20">
                <h5>{props.programmingLanguages}</h5>
                <p>Programming Languages</p>
              </div>
            </div>
          </div>

          <COntests data={props.contestData} />
        </div>
        <p className="tw-px-12 tw-pb-16 md:tw-px-28 tw-pt-10 tw-font-bold">
          Start your journey of competitive programming at Toph: with an archive of 1887 categorized programming problems and all noteworthy Bangladeshi programming contests since 2015 that you can rerun for practice.
        </p>
      </div>

      <div className="tw-mt-16 tw-w-screen tw-left-0 tw-bg-blue-500">
        <div className="container tw-text-center tw-pt-20 tw-flex tw-flex-col tw-text-white">
          <p className="tw-text-xl tw-px-4">Host programming contests with ease, at any scale</p>
          <div className="tw-pt-16 tw-flex tw-flex-col tw-px-4 md:tw-flex-row md:tw-justify-around">
            <img className="tw-h-80 md:tw-h-96" src={Home1} alt="Home" />
            <ul className="tw-pt-16">
              <li className="tw-pb-3">Preset and custom contest formats</li>
              <li className="tw-pb-3">Invite-only, passphrase, or open for all</li>
              <li className="tw-pb-3">Block or disqualify participants</li>
              <li className="tw-pb-3">Network and geographic restrictions</li>
              <li className="tw-pb-3">Multiple standings with the option to freeze</li>
              <li className="tw-pb-10">Review and rejudge submissions in bulk</li>
            </ul>
          </div>
          <div className="tw-px-4">
            <p className="tw-text-xl">An easy-to-use user interface built for humans. Scalable from a few to thousands of participants.</p>
            <div className="tw-flex tw-justify-center tw-py-8">
              <button
                onClick={handleJoinToph}
                type="button"
                className="btn btn-primary btn-sm tw-mr-2"
              >
                Get Started
              </button>
              <button type="button" className="btn btn-secondary btn-sm">
                Have Any Question?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Middle);
