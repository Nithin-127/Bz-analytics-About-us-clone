"use client";
import React, { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { RxDotFilled } from "react-icons/rx";

type Slide = {
  img: string;
  title: string;
  subtitle: string;
  btn: string;
};

const Home = () => {
  const homeSlide: Slide[] = [
    {
      img: "/image1.jpeg",
      title: "Future Tech",
      subtitle:
        "AI-driven solutions tailored to innovate and transform digital landscapes.",
      btn: "Learn more about us",
    },
    {
      img: "/image2.jpeg",
      title: "Smart Minds",
      subtitle:
        "Crafting seamless UI experiences that elevate user interactions worldwide.",
      btn: "Work with us",
    },
    {
      img: "/image3.jpeg",
      title: "Talk to us",
      subtitle:
        "Innovative code crafted to meet your business needs and goals.",
      btn: "Work with us",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeSlide.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {/* banner section */}
      <section>
        <div className="w-full min-h-screen relative">
          <div
            style={{ backgroundImage: `url(${homeSlide[currentIndex].img})` }}
            className="w-full h-[100vh] sm:h-screen bg-center bg-cover bg-no-repeat duration-500"
          ></div>

          <div className=" max-w-7xl mx-auto flex justify-start items-start">
            <div className="absolute left-0 md:left-50 inset-0 flex flex-col justify-center items-start gap-y-[1rem] px-4">
              <h6
                style={{ textShadow: "2px 2px 4px rgba(0 ,0 ,0 ,0.6)" }}
                className="text-[1.5rem] md:text-4xl font-bold text-white"
              >
                {homeSlide[currentIndex].title}
              </h6>

              <p className="mt-4 text-sm p-lead  sm:text-lg md:text-xl inline-block min-w-full text-white">
                {homeSlide[currentIndex].subtitle}
              </p>

              <Button className="text-white font-bold px-8 sm:px-10 md:px-15 py-3 sm:py-4 md:py-5 text-lg">
                {homeSlide[currentIndex].btn}
              </Button>
            </div>

            <div className="absolute bottom-2/5 lg:right-40 right-5 flex flex-col gap-3">
              {homeSlide.map((eachSlide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`lg:text-3xl text-lg cursor-pointer ${
                    currentIndex === slideIndex ? "text-white" : "text-white/40"
                  }`}
                >
                  <FaDotCircle />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* infinite caraousal */}
      <section className="bg-black text-white">
        <div className="carousal w-full overflow-x-auto">
          <div className="group1 flex w-full">
            <div className="inline-block min-w-[80%] sm:min-w-full md:min-w-[50%] lg:min-w-[40%] py-3 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
              <p className="text-[14px]  sm:text-[16px] md:text-3xl   font-semibold">
                Unlocking Your Full Potential
              </p>
            </div>

            <div className="inline-block min-w-[80%] sm:min-w-full md:min-w-[50%] lg:min-w-[40%] py-3 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
              <p className=" text-[14px] sm:text-[16px] md:text-3xl   font-semibold">
                Turning Concepts into Reality
              </p>
            </div>

            <div className="inline-block min-w-[80%] sm:min-w-full md:min-w-[50%] lg:min-w-[40%] py-3 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
              <p className=" text-[14px] sm:text-[16px] md:text-3xl   font-semibold">
                Cultivating Creativity
              </p>
            </div>

            <div className="inline-block min-w-[80%] sm:min-w-full md:min-w-[50%] lg:min-w-[40%] py-3 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
              <p className=" text-[14px] sm:text-[16px] md:text-3xl   font-semibold">
                Expertise in Design & Development
              </p>
            </div>

            <div className="inline-block min-w-[80%] sm:min-w-full md:min-w-[50%] lg:min-w-[40%] py-3 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]">
              <p className=" text-[14px] sm:text-[16px] md:text-3xl   font-semibold">
                Mastery in Design & Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* text-contents */}
      <section className="w-full px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-15">
          <div className="flex flex-col gap-y-2 md:gap-y-2  md:text-left">
            <RxDotFilled size={24} className="text-primary" />

            <p className="text-gray-500  uppercase text-base">
              fueling success in
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px]  font-extrabold leading-tight">
              Diverse Industries We Serve
            </h2>
          </div>

          <div className="mt-6 md:mt-20">
            <ul className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10">
              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                BzAnalytics specializes in delivering cutting-edge technologies
                that not only propel businesses forward but also uniquely
                position them within their respective sectors.
              </li>

              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                Our foremost commitment is to drive industry growth by
                leveraging innovative technologies that propel businesses to the
                forefront of their sectors.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
