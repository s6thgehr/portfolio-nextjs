import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Thomas | Resume</title>
        <meta
          name="description"
          content="Physicist and Economist by Training. Software Developer by Passion."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-4 pt-[120px] ">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Thomas Gehrmann</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/thomas-gehrmann-36a05a145/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/s6thgehr"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        {/* --------------------- Professional Experience --------------------- */}
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Revisit UG</span>
            <span className="px-2">|</span>Aachen, Germany
          </p>
          <p className="py-1 italic">Flutter Developer (04/2022 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Conceptualised the architecture of the mobile app for
              subscriptions in the food service industry
            </li>
            <li>Developing the mobile frontend using Flutter/Dart</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">RWTH Aachen University</span>
            <span className="px-2">|</span>Aachen, Germany
          </p>
          <p className="py-1 italic">Research Associate (06/2017 - 09/2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Applied reinforcement learning algorithms to solve economic growth
              problems under uncertainty using Python and RLlib
            </li>
            <li>
              Created and taught courses on Reinforcement Learning in Economics,
              Python for Economists and Computational Economics
            </li>
            <li>
              Supervision of final theses about Dynamic Programming, Machine
              Learning and Reinforcement Learning
            </li>
          </ul>
        </div>

        {/* ------------------------- Education ------------------------- */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Master of Science Financial Engineering
            </span>
            <span className="px-2">|</span>WorldQuant Quant University
          </p>
          <p className="py-1 italic">(07/2020 - Current)</p>
          <p className="py-1 ">Current Score: 92%</p>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Master of Science Physics</span>
            <span className="px-2">|</span>University of Bonn
          </p>
          <p className="py-1 italic">(10/2013 - 11/2016)</p>
          <p className="py-1 ">Final Score: 1.5 (very good)</p>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Bachelor of Science Economics
            </span>
            <span className="px-2">|</span>University of Bonn
          </p>
          <p className="py-1 italic">(04/2011 - 01/2020)</p>
          <p className="py-1 ">Final Score: 1.3 (very good)</p>
          <p className="py-1 ">
            Study abroad at Universitat Pompeu Fabra, Barcelona (10/2013 -
            05/2014)
          </p>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Bachelor of Science Physics
            </span>
            <span className="px-2">|</span>University of Bonn
          </p>
          <p className="py-1 italic">(10/2009 - 09/2013)</p>
          <p className="py-1 ">Final Score: 1.7 (good)</p>
        </div>

        {/* ------------------------- Certificates ------------------------- */}
        <h5 className="text-center underline text-[18px] py-4">Certificates</h5>
        {/* Certificate */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Decentralized Finance (DeFi): The Future of Finance
            </span>
            <span className="px-2">|</span>Duke University on Coursera
          </p>
          <p className="py-1 italic mb-2">Issued July 22, 2022</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://coursera.org/share/a11d09385ecd3d5ae4509658347f80c8"
            className="py-2 px-2 rounded-md bg-[#d43defbb] text-gray-200"
          >
            Certificate
          </a>
        </div>
        {/* Certificate */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              JavaScripts Algorithms and Data Structures
            </span>
            <span className="px-2">|</span>FreeCodeCamp
          </p>
          <p className="py-1 italic mb-2">Issued June 4, 2022</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://freecodecamp.org/certification/s6thgehr/javascript-algorithms-and-data-structures"
            className="py-2 px-2 rounded-md bg-[#d43defbb] text-gray-200"
          >
            Certificate
          </a>
        </div>

        {/* Certificate */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Reinforcement Learning</span>
            <span className="px-2">|</span>University of Alberta and Alberta
            Machine Intelligence Institute on Coursera
          </p>
          <p className="py-1 italic mb-2">Issued April 22, 2020</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://coursera.org/share/7b60156bda542cf5880a42169f7ae236"
            className="py-2 px-2 rounded-md bg-[#d43defbb] text-gray-200"
          >
            Certificate
          </a>
        </div>

        {/* Certificate */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Deep Learning</span>
            <span className="px-2">|</span>DeepLearning.AI on Coursera
          </p>
          <p className="py-1 italic mb-2">Issued March 23, 2018</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://coursera.org/share/4da2f60c647f3652c2ce559a192478b8"
            className="py-2 px-2 rounded-md bg-[#d43defbb] text-gray-200"
          >
            Certificate
          </a>
        </div>

        {/* Certificate */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Machine Learning</span>
            <span className="px-2">|</span>Stanford University on Coursera
          </p>
          <p className="py-1 italic mb-2">Issued October 10, 2017</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://coursera.org/share/1494aeb3d17bde3332cd80efbb5fc0cd"
            className="py-2 px-2 rounded-md bg-[#d43defbb] text-gray-200"
          >
            Certificate
          </a>
        </div>
      </div>
    </>
  );
};

export default resume;
