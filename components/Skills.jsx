import React from "react";
import SkillItem from "./SkillItem.jsx";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Node from "../public/assets/skills/node.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Python from "../public/assets/skills/python.png";
import Pytorch from "../public/assets/skills/pytorch.png";
import Flutter from "../public/assets/skills/flutter.svg";
import Dart from "../public/assets/skills/dart.png";
import Rust from "../public/assets/skills/rust.png";
import Solidity from "../public/assets/skills/solidity.svg";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem logo={Python} name="Python" />
          <SkillItem logo={Pytorch} name="PyTorch" />
          <SkillItem logo={Dart} name="Dart" />
          <SkillItem logo={Flutter} name="Flutter" />
          <SkillItem logo={Javascript} name="JavaScript" />
          <SkillItem logo={ReactImg} name="React" />
          <SkillItem logo={NextJS} name="Next.js" />
          <SkillItem logo={Tailwind} name="Tailwind" />
          <SkillItem logo={Node} name="Node.js" />
          <SkillItem logo={Rust} name="Rust" />
          <SkillItem logo={Solidity} name="Solidity" />
          <SkillItem logo={Github} name="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
