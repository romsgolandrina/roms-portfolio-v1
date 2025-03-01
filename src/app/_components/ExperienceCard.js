import React from "react";

const ExperienceCard = () => {
  return (
    <>
      <div className="flex flex-row p-4 rounded-md hover:bg-white/10 hover:shadow-md text-[#c2b7a7] cursor-pointer">
        <h1 className="w-[30%] text-md font-normal font-title uppercase">
          Dec &mdash; Mar 2024
        </h1>
        <h1 className="w-[70%] text-md font-normal font-title text-justify">
          <span className="font-semibold text-white">
            Junior Front-end Developer - Contractual
          </span>{" "}
          During my time at Media Meter Inc., I contributed to enhancing
          existing web applications by implementing new features and optimizing
          performance. I gained hands-on experience with API integration,
          ensuring seamless communication between different systems.
          Additionally, I expanded my technical skill set by learning
          TypeScript, a modern programming language, and utilizing a variety of
          new tools and technologies, including Postman for API testing, JWT.io
          for secure authentication, and various React frameworks and libraries
          to improve the development process and user experience.
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
              React
            </span>
            <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
              TypeScript
            </span>
            <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
              FastAPI
            </span>
            <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
              RESTfulAPI
            </span>
            <span className="badge bg-[#4A628A]/15 p-3 text-[#B9E5E8] text-md mt-1 font-semibold">
              TailwindCSS
            </span>
          </div>
        </h1>
      </div>
      <div className="flex flex-row p-4 rounded-md hover:bg-white/10 hover:shadow-md text-[#c2b7a7] cursor-pointer">
        <h1 className="w-[30%] text-md font-normal font-title uppercase">
          Sep 2024
        </h1>
        <h1 className="w-[70%] text-md font-normal font-title text-justify">
          <span className="font-semibold text-white">Recent BSIT graduate</span>{" "}
          with Latin honors from the Technological Institute of the Philippines
          - Quezon City, majoring in cybersecurity. Eager to gain industry
          experience and apply my academic knowledge in a professional setting.
          <div className="flex flex-wrap gap-2">
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
          at Creciendo Philippines, where I contributed to the development of a
          Human Resource Information System (HRIS) and independently led the
          creation of a hiring website for the company, focusing primarily on
          front-end development.
          <div className="flex flex-wrap gap-2">
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
    </>
  );
};

export default ExperienceCard;
