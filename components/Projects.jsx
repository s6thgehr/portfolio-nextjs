import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#d43def]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <h3 className="py-4">Coming Soon!</h3>
        <h5 className="py-4">A little foretaste</h5>
        <ul>
          <li>Wind drone</li>
          <li>Paranoia - Party Game</li>
          <li>The Lord of the Rings Quiz</li>
          <li>Reinforcement Learning in Economics Course</li>
        </ul>
        {/* <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> 
        </div>*/}
      </div>
    </div>
  );
};

export default Projects;
