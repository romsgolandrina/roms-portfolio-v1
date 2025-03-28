import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";

const MobileView = () => {
  return (
    <div className="w-full min-h-screen flex flex-col 4xl:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:display sm:display xs:display xs:px-[8px] xs:py-[10px]">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold font-title text-[#ECDFCC] tracking-tight 4xl:text-8xl 2xl:text-5xl xl:text-4xl lg:text-4xl">
            Roms Golandrina
          </h1>
          <h1 className="text-2xl font-normal font-title text-[#ECDFCC] 4xl:text-4xl 2xl:text-xl xl:text-xl lg:text-xl">
            Front End Developer
          </h1>
          <h1 className="text-xl font-normal font-title text-[#8b8378] pr-28 4xl:text-3xl 4xl:pr-40 2xl:text-base xl:text-base xl:pr-14 lg:text-base lg:pr-14">
            I build accessible, pixel-perfect digital experiences for the web.
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="w-[20%] h-full lg:mt-10">
            <ul className="text-base font-semibold uppercase flex flex-col gap-3 4xl:text-2xl 2xl:text-sm xl:text-sm lg:text-sm">
              <li>
                <a
                  href="#about"
                  className="text-[#ECDFCC] cursor-pointer tracking-wider nav-link"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-[#ECDFCC] cursor-pointer tracking-wider nav-link"
                >
                  experiences
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#ECDFCC] cursor-pointer tracking-wider nav-link"
                >
                  projects
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col justify-end">
          <div className="flex flex-row gap-4 4xl:gap-7">
            <Link href="https://github.com/romsgolandrina">
              <FaGithub
                size={25}
                color="#ECDFCC"
                className="cursor-pointer w-[25px] h-[25px] 4xl:w-[40px] 4xl:h-[40px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[20px] lg:h-[20px]"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/jhon-rommel-jr-golandrina-9a544a315/">
              <FaLinkedin
                size={25}
                color="#ECDFCC"
                className="cursor-pointer w-[25px] h-[25px] 4xl:w-[40px] 4xl:h-[40px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[20px] lg:h-[20px]"
              />
            </Link>
            <Link href="https://www.facebook.com/romsglndrn">
              <FaFacebook
                size={25}
                color="#ECDFCC"
                className="cursor-pointer w-[25px] h-[25px] 4xl:w-[40px] 4xl:h-[40px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[20px] lg:h-[20px]"
              />
            </Link>
            <Link href="https://www.instagram.com/romsgolandrina/">
              <FaInstagram
                size={25}
                color="#ECDFCC"
                className="cursor-pointer w-[25px] h-[25px] 4xl:w-[40px] 4xl:h-[40px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[20px] lg:h-[20px]"
              />
            </Link>
            <Link href="https://x.com/romsgolandrina">
              <FaXTwitter
                size={25}
                color="#ECDFCC"
                className="cursor-pointer w-[25px] h-[25px] 4xl:w-[40px] 4xl:h-[40px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[20px] lg:h-[20px]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <section id="about" className="w-full mt-32 2xl:mt-28 xl:mt-28">
          <h1 className="text-left text-[#c2b7a7] text-lg font-normal font-title 4xl:text-3xl 2xl:text-xl xl:text-base lg:text-sm">
            I’m a{" "}
            <span className="font-semibold text-white">
              front-end developer
            </span>{" "}
            passionate about building intuitive, responsive web interfaces with
            a focus on both aesthetics and functionality. As a recent BSIT
            graduate from the Technological Institute of the Philippines, I’m
            currently diving into projects with{" "}
            <span className="font-semibold text-white">Next.js</span> and
            <span className="font-semibold text-white"> TailwindCSS</span>,
            crafting pixel-perfect designs and scalable code. <br />
            <br /> My favorite work happens at the intersection of design and
            development, where I can bring visual ideas to life in a way that’s
            both engaging and efficient. From university projects to personal
            builds, I aim to create user experiences that are not only visually
            appealing but also accessible and performant. <br />
            <br /> In the past, I’ve developed software with a mix of back-end
            and front-end elements, gaining hands-on experience in everything
            from database management to creating custom UI components. I'm
            always eager to learn more about industry best practices and refine
            my skills with every new project.
          </h1>
        </section>
        <section
          id="experience"
          className="w-full mt-20 flex flex-col gap-6 4xl:mt-20 2xl:gap-4 xl:gap-4 xl:mt-10 lg:gap-4 lg:mt-8"
        >
          <ExperienceCard />
          <h1
            onClick={() =>
              window.open("/GOLANDRINA_RESUME_UPDATED.pdf", "_blank")
            }
            className="text-[#c2b7a7] text-lg font-bold font-title mt-6 flex items-center group cursor-pointer hover:text-white 4xl:text-2xl 2xl:text-sm xl:text-base lg:text-sm"
          >
            View Full Résumé
            <FiArrowUpRight
              size={25}
              className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 w-25 h-25  4xl:w-[35px] 4xl:h-[35px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[15px] lg:h-[15px]"
            />
          </h1>
        </section>
        <section
          id="projects"
          className="w-full flex flex-col gap-4 mt-16 xl:mt-14 lg:mt-10"
        >
          <Link href="https://www.creciendo.com.ph/home">
            <div className="w-full flex flex-row gap-1 group p-4 rounded-md hover:bg-white/10 hover:shadow-md text-[#c2b7a7] cursor-pointer 4xl:rounded-lg 4xl:hover:shadow-lg 2xl:rounded-md 2xl:hover:shadow-md xl:rounded-md xl:hover:shadow-md lg:rounded-md lg:hover:shadow-md lg:gap-2">
              <div className="w-[30%]">
                <Image
                  src="/creciendo.png"
                  alt="creciendo"
                  width={1920}
                  height={1080}
                  className="border-2 rounded-md border-[#40534C] w-[130px] 4xl:w-[190px] 2xl:w-[115px] xl:w-[100px] lg:w-[90px]"
                />
              </div>
              <div className="w-[65%]">
                <h1 className="text-[#c2b7a7] font-normal text-base font-title 4xl:text-3xl 2xl:text-lg xl:text-base lg:text-xs ">
                  The <span className="text-white">Creciendo Philippines</span>{" "}
                  hiring website enables users to explore job listings and
                  submit applications seamlessly. Designed for a smooth user
                  experience, it streamlines the hiring process for both
                  applicants and recruiters.
                </h1>
              </div>
              <div className="w-[5%]">
                <FiArrowUpRight
                  size={25}
                  className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 4xl:w-[35px] 4xl:h-[35px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[15px] lg:h-[15px]"
                />
              </div>
            </div>
          </Link>
        </section>

        <h1 className="text-base text-justify text-[#8b8378] font-title font-normal 4xl:text-3xl 2xl:text-sm xl:text-base lg:text-xs mt-24">
          Loosely designed in{" "}
          <span className="text-white font-semibold">Figma</span> and coded in{" "}
          <span className="text-white font-semibold">Visual Studio</span> Code
          by yours truly. Built with{" "}
          <span className="text-white font-semibold">Next.js</span> and
          <span className="text-white font-semibold">Tailwind CSS</span>,
          deployed with{" "}
          <span className="text-white font-semibold">Vercel.</span> All text is
          set in the Inter typeface.
        </h1>
      </div>
    </div>
  );
};

export default MobileView;
