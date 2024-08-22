import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterComp = (props) => {
  return (
    <div className="tw-bg-gray-100 tw-border-t-2 tw-py-16 ">


        <div className="container tw-flex tw-flex-col md:tw-flex-row-reverse tw-justify-between">
      <ul className="tw-grid tw-grid-cols-2 tw-gap-4">
        <li>
          <a href="#" className=" tw-no-underline tw-text-blue-600">Drafts</a>
        </li>
        <li>
          <a href="#" className=" tw-no-underline tw-text-blue-600">Community</a>
        </li>
        <li>
          <a href="#" className=" tw-no-underline tw-text-blue-600">Blog</a>
        </li>
        <li>
          <a href="#" className=" tw-no-underline tw-text-blue-600">Status</a>
        </li>
        <li>
          <a href="#" className=" tw-no-underline tw-text-blue-600">About Us</a>
        </li>
        <li>
          <a href="#" className="tw-no-underline tw-text-blue-600">Company</a>
        </li>
        <li>
          <a href="#" className="tw-no-underline tw-text-blue-600">Career</a>
        </li>
        <li>
          <a href="#" className="tw-no-underline tw-text-blue-600">Branding</a>
        </li>
        <li>
          <a href="#" className="tw-no-underline tw-text-blue-600">Contact Us</a>
        </li>
      </ul>

      
      <div className="tw-mt-16 md:tw-mt-10 tw-flex tw-flex-col tw-items-center tw-text-center">
        <h2>Toph</h2>
        <p>A conpititive programming platform by htc soft</p>
        <div className="d-flex">
        <FaFacebook className="tw-text-2xl"/>
        <FaGithub className="tw-text-2xl"/>
        <FaLinkedin className="tw-text-2xl"/>
        </div>

      </div>



      </div>
    </div>
  );
};

export default FooterComp;
