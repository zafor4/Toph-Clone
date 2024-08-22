import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../assets/images/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinToph = () => {
    navigate("/authentication");
  };
  return (
    <div className=" container tw-mt-20 tw-flex tw-flex-col md:tw-flex-row">
      <div className="tw-px-4 md:tw-px-0">
        <h2 className="tw-font-normal">
          The <strong className="tw-text-blue-700 tw-font-normal">Place</strong>{" "}
          for Competitive Programmers
        </h2>
        <br />
        <p className="tw-text-xl">
          Toph is where programmers participate in programming contests, solve
          algorithm and data structure challenges and become a part of an
          awesome community.
        </p>

        <div>
          <button
            onClick={handleJoinToph}
            type="button"
            className="btn btn-primary btn-sm tw-mr-2"
          >
            Join Toph
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            Host a Contest
          </button>
        </div>
      </div>
      <div className="tw-mt-16 md:tw-mt-0 tw-ps-16">
        <img src={hero} className="img-fluid" alt="..."></img>
      </div>
    </div>
  );
};

export default Hero;
