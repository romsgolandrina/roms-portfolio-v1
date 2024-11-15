"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const Home = ({ children }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-row gap-4 justify-between px-[310px]"
        style={{
          background: `radial-gradient(circle at ${backgroundPosition}, rgba(236, 223, 204, 0.3), rgba(105, 117, 101, 0.2), rgba(30, 32, 30, 0.1))`,
        }}
      >
        <header className="w-1/2 sticky top-0 max-h-screen flex flex-col py-32 justify-between">
          <div className="w-fulls h-full flex flex-col gap-3">
            <h1 className="text-6xl font-bold font-title text-[#ECDFCC] tracking-tight">
              Roms Golandrina
            </h1>
            <h1 className="text-2xl font-normal font-title text-[#ECDFCC]">
              Front End Engineer
            </h1>
            <h1 className="text-xl font-normal font-title text-[#8b8378] pr-28">
              I build accessible, pixel-perfect digital experiences for the web.
            </h1>
          </div>
          <div className="w-1/2 h-full mt-16">
            <ul className="text-md font-semibold uppercase flex flex-col gap-3">
              <Link href="#about">
                <li className="text-[#ECDFCC] cursor-pointer tracking-wider">
                  about
                </li>
              </Link>
              <Link href="#experience">
                <li className="text-[#ECDFCC] cursor-pointer tracking-wider">
                  experiences
                </li>
              </Link>
              <li className="text-[#ECDFCC] cursor-pointer tracking-wider">
                projects
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex flex-col justify-end gap-4">
            <div className="flex flex-row gap-4">
              <Link href="https://github.com/romsgolandrina">
                <FaGithub
                  size={25}
                  color="#ECDFCC"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/jhon-rommel-jr-golandrina-9a544a315/">
                <FaLinkedin
                  size={25}
                  color="#ECDFCC"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://www.facebook.com/romsglndrn">
                <FaFacebook
                  size={25}
                  color="#ECDFCC"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://www.instagram.com/romsgolandrina/">
                <FaInstagram
                  size={25}
                  color="#ECDFCC"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://x.com/romsgolandrina">
                <FaXTwitter
                  size={25}
                  color="#ECDFCC"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </header>
        <div className="w-1/2 max-h-screen overflow-y-auto scrollbar-hide">
          <section id="about" className="w-full h-1/2 mt-32">
            <h1 className="text-left text-[#c2b7a7] text-lg font-normal font-title">
              I’m a{" "}
              <span className="font-semibold text-white">
                front-end developer
              </span>{" "}
              passionate about building intuitive, responsive web interfaces
              with a focus on both aesthetics and functionality. As a recent
              BSIT graduate from the Technological Institute of the Philippines,
              I’m currently diving into projects with{" "}
              <span className="font-semibold text-white">Next.js</span> and
              <span className="font-semibold text-white"> TailwindCSS</span>,
              crafting pixel-perfect designs and scalable code. <br />
              <br /> My favorite work happens at the intersection of design and
              development, where I can bring visual ideas to life in a way
              that’s both engaging and efficient. From university projects to
              personal builds, I aim to create user experiences that are not
              only visually appealing but also accessible and performant. <br />
              <br /> In the past, I’ve developed software with a mix of back-end
              and front-end elements, gaining hands-on experience in everything
              from database management to creating custom UI components. I'm
              always eager to learn more about industry best practices and
              refine my skills with every new project.
            </h1>
          </section>
          <section id="experience" className="w-full mt-6 flex flex-col gap-6">
            <div className="flex flex-row p-4 rounded-md hover:bg-white/10 hover:shadow-md text-[#c2b7a7] cursor-pointer">
              <h1 className="w-[30%] text-md font-normal font-title uppercase">
                2024 &mdash; Present
              </h1>
              <h1 className="w-[70%] text-md font-normal font-title text-justify">
                <span className="font-semibold text-white">
                  Recent BSIT graduate
                </span>{" "}
                with Latin honors from the Technological Institute of the
                Philippines - Quezon City, majoring in cybersecurity. Eager to
                gain industry experience and apply my academic knowledge in a
                professional setting.
                <div className="flex flex-row gap-2">
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    Fresh Graduate
                  </span>
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    Cybersecurity
                  </span>
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    Distinction
                  </span>
                </div>
              </h1>
            </div>
            <div className="flex flex-row p-4 rounded-md hover:bg-white/10 hover:shadow-md text-[#c2b7a7] cursor-pointer">
              <h1 className="w-[30%] text-md font-normal font-title uppercase">
                Feb &mdash; July 2024
              </h1>
              <h1 className="w-[70%] text-md font-normal font-title text-justify">
                <span className="font-semibold text-white">
                  Full Stack Web Developer - Intern
                </span>{" "}
                at Creciendo Philippines, where I contributed to the development
                of a Human Resource Information System (HRIS) and independently
                led the creation of a hiring website for the company, focusing
                primarily on front-end development.
                <div className="flex flex-row gap-2">
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    Next.js
                  </span>
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    TailwindCSS
                  </span>
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    MongoDB
                  </span>
                  <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
                    Node.js
                  </span>
                </div>
              </h1>
            </div>
            <h1
              onClick={() => window.open("/GOLANDRINA_RESUME.pdf", "_blank")}
              className="text-[#c2b7a7] text-lg font-bold font-title mt-6 flex items-center group cursor-pointer hover:text-white"
            >
              View Full Résumé
              <FiArrowUpRight
                size={25}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </h1>
          </section>
          <div className="w-full h-full bg-red-500 rounded-md">a</div>
        </div>
      </div>
    </>
  );
};

export default Home;
