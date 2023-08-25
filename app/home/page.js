"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const [length, setLength] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/waitlist/new");
      const data = await response.json();
      setLength(data.length);
    })();
  }, []);
  return (
    <>
      <div className="absolute top-0 min-h-screen h-full w-full">
        <img
          src="./images/star-blob.png"
          className="relative -top-8 xl:hidden md:max-h-screen md:w-screen opacity-70"
        />
        <img
          src="./images/d-mini-stars.png"
          className="fixed -top-8 xl:block hidden w-[60%] object-cover right-0 h-[calc(100vh + 1rem)] opacity-70"
        />
        <img
          src="./images/star.png"
          className="absolute top-8 xl:block hidden w-[30%] object-cover left-[25%] opacity-40"
        />
        <img
          src="./images/mini-stars.png"
          className="absolute bottom-0 xl:hidden"
        />
      </div>
      <div>
        <div className="flex items-center justify-between relative p-4 xl:w-10/12 xl:mx-auto xl:mt-8">
          <img
            src="./images/logo-star.png"
            alt=""
            className="w-36 object-contain"
          />
          <p className="text-[#807B00] bg-[#FFFBD2] text-xs py-1 px-2 rounded-xl lg:hidden">
            Coming soon
          </p>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full pt-12 xl:pt-6 2xl:pt-12 lg:flex-row-reverse lg:w-10/12 lg:mx-auto xl:justify-between animate__animated animate__fadeIn">
        <img
          src="./images/hero-1.png"
          alt=""
          className="w-[60%] object-contain xl:w-[40%] animate__animated animate__jackInTheBox xl:fixed"
        />
        <div className="pt-5 text-center xl:pl-5 xl:flex-[0.38] xl:mr-auto">
          <div className="hidden lg:flex items-center gap-x-5 relative mb-5">
            <img
              src="./images/logo.png"
              alt=""
              className="w-36 object-contain"
            />
            <p className="text-[#807B00] bg-[#FFFBD2] text-xs py-1 px-2 rounded-xl">
              Coming soon
            </p>
          </div>
          <h1 className="text-4xl text-white text-center lg:text-left lg:text-3xl">
            Get early access!
          </h1>
          <p className="text-white max-w-[85%] text-center mx-auto text-base mt-2 lg:text-left lg:max-w-[100%] lg:ml-0 font-light">
            Be the First to Experience the Revolution of Freelance with
            Creedlance: Join Our Exclusive Waitlist Today! and claim a premium
            username
          </p>
          <img
            src="./images/logo.png"
            alt=""
            className="w-32 mx-auto mt-10 object-contain lg:hidden"
          />
          <h2 className="text-2xl text-white text-center mt-3 lg:text-3xl xl:text-[3rem] lg:mt-8 animate__animated animate__jello">
            Join our Community
          </h2>
          <div className="flex items-center gap-x-14 xl:gap-x-20 justify-center mt-3 lg:mt-8">
            <a href="https://t.me/+tFt5COL_UrpiYzZk" target="_blank">
              <img
                src="./images/telegram-btn.png"
                alt=""
                className="w-[6.5rem] object-contain relative -top-[5px]"
              />
            </a>
            <a
              href="https://chat.whatsapp.com/IsV08e1b6Fx45noTSeqdv4"
              target="_blank"
            >
              <img
                src="./images/whatsapp-btn.png"
                alt=""
                className="w-16 object-contain lg:w-20"
              />
            </a>
          </div>
          <a
            href="./join"
            className="bg-[#DAA520] text-white py-3 w-full block max-w-[90%] mx-auto rounded-lg mt-14 lg:max-w-full"
          >
            Join waitlist
          </a>
          <p className="text-white mt-4 xl:mt-8">
            Current Waitlisted Users{" "}
            {length && (
              <span className="bg-gradient-to-br font-medium text-xl xl:text-2xl xl:pl-2 from-white to-gray-600 bg-clip-text text-transparent">
                {length}
              </span>
            )}
          </p>
          <div className="xl:hidden mb-8">
            <p className="text-lg text-white text-center mt-8">Follow Us</p>
            <div className="flex mt-4 justify-center gap-x-3 items-center">
              <a href="#">
                <img
                  src="./images/fb.png"
                  alt=""
                  className="w-8 object-contain relative -top-[5px]"
                />
              </a>
              <a href="#">
                <img
                  src="./images/tw.png"
                  alt=""
                  className="w-8 object-contain relative -top-[5px]"
                />
              </a>
              <a href="#">
                <img
                  src="./images/ig.png"
                  alt=""
                  className="w-8 object-contain relative -top-[5px]"
                />
              </a>
              <a href="#">
                <img
                  src="./images/th.png"
                  alt=""
                  className="w-8 object-contain relative -top-[5px]"
                />
              </a>
            </div>
            <a
              href="./about.ejs"
              className="text-[#daa520] underline underline-offset-2"
            >
              About us
            </a>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-center w-full relative top-10">
        <div className="hidden xl:flex py-5 mt-5 w-10/12 border-t-[1px] border-dashed border-gray-700 text-gray-400 items-center justify-between">
          <p className="">Creedlance ltd 2023 All Rights Reserved</p>
          <a
            href="./about.ejs"
            className="text-[#daa520] underline underline-offset-2"
          >
            About us
          </a>
        </div>
        <div className="hidden xl:absolute xl:bottom-[5rem] w-10/12 xl:flex xl:flex-col xl:items-end">
          <div className="flex mt-4 justify-center gap-x-5 items-center">
            <a href="#">
              <img
                src="./images/fb.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
            <a href="#">
              <img
                src="./images/tw.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
            <a href="#">
              <img
                src="./images/ig.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
            <a href="#">
              <img
                src="./images/th.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
