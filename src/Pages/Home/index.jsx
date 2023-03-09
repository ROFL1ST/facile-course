import React from "react";
import Lottie from "lottie-react";
import Studying from "../../assets/json/studying.json";
import Book from "../../assets/json/book-loading.json";
import Pen from "../../assets/logo/magicpen.svg";
import messages from "../../assets/logo/messages-2.svg";
import mic from "../../assets/logo/microphone-2.svg";
import book from "../../assets/logo/book.svg";

export default function Home() {
  const program = [
    {
      id: 1,
      desc: "Our program is easy to use and useful for the future",
      url: Pen,
    },
    {
      id: 2,
      desc: "podcasts or live broadcasts to improve students' abilities",
      url: mic,
    },
    {
      id: 3,
      desc: "learn to communicate with teachers and friends using up-to-date English",
      url: messages,
    },
    {
      id: 4,
      desc: "Create new experience with ways of perfect learning",
      url: book,
    },
  ];

  const tips = [
    {
      id: 1,
      title: "Complete Program",
      desc: "At Facile Course you can design your own program according to your needs and abilities. We have the most complete program in our courses",
    },
    {
      id: 2,
      title: "The Most Conducive Environment",
      desc: "At Facile Course we have the best learning environment in Indonesia. Come and meet us, and you will definitely agree. Our students learn English faster because we have the best learning environment.",
    },
    {
      id: 3,
      title: "Complete Program",
      desc: "The most innovative non-formal education institution 2017 (Jawa Pos Radar Kediri). For about 10 years, more than 100 thousand people have studied English with us.",
    },
    {
      id: 4,
      title: "Complete Program",
      desc: "Learning English doesn't have to be a nightmare if you have a great teacher and a supportive learning environment to keep learning and practicing your English. ",
    },
  ];
  return (
    <>
      <div className="w-screen px-16">
        {/* Home */}
        <div className="flex justify-between py-20 items-center mb-20">
          <div className="left flex flex-col w-1/3 gap-y-10">
            <h1 className="font-extrabold text-5xl">
              Discover your best potential of english learning
            </h1>
            <p className="text-gray-400 font-bold">
              is one of the most popular and rapidly growing English language
              course institutions in East Jakarta. The main advantage of Facile
              Course is that it has the most complete program in East Jakarta,
              with a total of 45 programs offered. Starting from grammar,
              speaking, pronunciation, listening, reading, TOEFL and IELTS. The
              program is available from basic to advanced levels.
            </p>
            <div>
              <button className="transition-all hover:-translate-x-1 hover:-translate-y-1 font-bold px-6 py-3 rounded-xl bg-[#A084DC] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="right w-1/3">
            <Lottie animationData={Studying} />
          </div>
        </div>
        {/* Home */}
        {/* List */}
        <div className="py-28">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="font-extrabold text-5xl w-[60%] mx-auto">
                sharpen your skills like a sharp sword
              </h1>
            </div>
            <div className="flex justify-between w-full items-center mt-10">
              <div className="left w-1/4">
                <Lottie animationData={Book} />
              </div>
              <div className="right w-3/5">
                <div className="grid grid-cols-2 gap-10">
                  {program.map((i, key) => (
                    <Card key={key} i={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* List */}
        {/* tips */}
        <div className="py-28 flex flex-col mb-20">
          <div className="title">
            <h1 className="w-1/4 font-extrabold text-5xl">
              english is fun and amazing with tips{" "}
            </h1>
          </div>
          {/* content */}
          <div className="grid grid-cols-2 mt-40 gap-20">
            {tips.map((i, key) => (
              <CardTips key={key} i={i} />
            ))}
          </div>
          {/* content */}
        </div>
        {/* tips */}
      </div>
    </>
  );
}

function Card({ i }) {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="top flex">
          <div className=" p-5 bg-[#A084DC] rounded-lg">
            <img src={i.url} className="h-10" alt="" />
          </div>
        </div>
        <div className="bottom">
          <p className="text-gray-400 font-bold">{i.desc}</p>
        </div>
      </div>
    </>
  );
}

function CardTips({ i }) {
  return (
    <>
      <div className="flex justify-start items-start gap-x-5 rounded-xl shadow-2xl w-4/5">
        <div className="number h-40 w-40 bg-[#A084DC] rounded-xl flex justify-center items-center">
          <h1 className="font-extrabold text-white text-5xl">{i.id}</h1>
        </div>
        <div className="content flex flex-col gap-y-4 justify-center py-2 pr-5 w-3/4">
          <h1 className="font-bold">{i.title}</h1>
          <p >{i.desc}</p>
        </div>
      </div>
    </>
  );
}
