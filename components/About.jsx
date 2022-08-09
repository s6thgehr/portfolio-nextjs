import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            I have always been deeply curious by nature and I enjoy the
            challenge of solving complex problems. That's why I was very
            interested in physics. Physics is an incredibly diverse field where
            we study and discover extraordinary phenomena from quantum physics
            to astrophysics that seem out of this world.
          </p>
          <p className="py-2 text-gray-600">
            During my physics studies I learned programming in C. I was
            fascinated how a few lines on a simple text file could solve
            complicated problems. I fell in love with programming. I started to
            learn Java and C++ and for my master thesis I build a wind drone and
            programmed an autopilot for it.
          </p>
          <p className="py-2 text-gray-600">
            After my physics studies I worked as a research associate at the
            chair of Computational Economics. Machine learning and AI has caught
            my interest there. I applied modern reinforcement learning
            algorithms to economics decision problems under uncertainty using
            Python.
          </p>
          <p className="py-2 text-gray-600">
            Currently, I fell down the blockchain rabbit hole. I am intrigued to
            develop a more open, trustless, permissionless and ubiquitous
            internet using decentralized data architectures. I really hope to be
            able to bring my knowledge about AI and blockchain together to build
            something really awesome.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
