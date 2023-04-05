import React from "react";
import Lottie from "lottie-react";
import Studying from "../../assets/json/studying.json";
import Book from "../../assets/json/book-loading.json";
import Pen from "../../assets/logo/magicpen.svg";
import messages from "../../assets/logo/messages-2.svg";
import mic from "../../assets/logo/microphone-2.svg";
import book from "../../assets/logo/book.svg";
import about from "../../assets/json/about-us.json";

export default function Home() {
  const program = [
    {
      id: 1,
      desc: " Our program is easy to use and useful for the future. By doing so, you can ensure that your program will have a wider audience and will be able to help people solve problems or achieve their goals more efficiently. Overall, creating easy-to-use and useful software requires a combination of user-centered design, technical expertise, and forward-thinking. With these principles in mind, you can create programs that have a positive impact on people's lives.",
      url: Pen,
    },
    {
      id: 2,
      desc: "Podcasts or live broadcasts to improve students' abilities. Listening to podcasts and live broadcasts in the target language can improve students' listening and comprehension skills. They can also provide exposure to different accents and vocabulary, and help students improve their pronunciation and speaking skills.",
      url: mic,
    },
    {
      id: 3,
      desc: "Learn to communicate with teachers and friends using up-to-date English. Improve your vocabulary and understanding of modern English, try reading books, articles, and websites in English. You can also listen to podcasts, news broadcasts, and music to improve your listening skills and get a sense of how English is spoken in everyday conversations.",
      url: messages,
    },
    {
      id: 4,
      desc: "Create new experience with ways of perfect learning. Everyone has a unique learning style, whether it's visual, auditory, or kinesthetic. Understanding your learning style can help you identify the best methods and techniques to help you learn effectively. For example, if you are a visual learner, you may benefit from using diagrams or mind maps to help you understand complex concepts.",
      url: book,
    },
  ];

  const tips = [
    {
      id: 1,
      title: "Complete Program",
      desc: "At Facile Course you can design your own program according to your needs and abilities. We have the most complete program in our courses. By designing your own program, you can focus on the specific skills and knowledge that are most relevant to your personal and professional goals. This can help you stay motivated and engaged in your studies.",
    },
    {
      id: 2,
      title: "The Most Conducive Environment",
      desc: "At Facile Course we have the best learning environment in Indonesia. Come and meet us, and you will definitely agree. Our students learn English faster because we have the best learning environment. .By providing a safe and supportive space for students to practice their language skills, a good learning environment can help students build confidence in their abilities.",
    },
    {
      id: 3,
      title: "Most Innovative Institution",
      desc: "The most innovative non-formal education institution 2017 (Jawa Pos Radar Kediri). For about 10 years, more than 100 thousand people have studied English with us. Facile Course's success may be attributed to its innovative teaching methods, which may include a variety of interactive and engaging activities, use of technology, and personalized learning plans.",
    },
    {
      id: 4,
      title: "Best Qualified Tutor",
      desc: "Learning English doesn't have to be a nightmare if you have a great teacher and a supportive learning environment to keep learning and practicing your English. A good teacher can provide personalized feedback to students, helping them identify areas where they need to improve and providing guidance on how to do so.",
    },
  ];
  return (
    <>
      <div className="w-screen px-16">
        {/* Home */}
        <div
          id="home"
          className="flex justify-between py-20 items-center mb-20"
        >
          <div className="left flex flex-col 2xl:w-1/3 w-1/2 gap-y-10">
            <h1 className="font-extrabold 2xl:text-6xl text-5xl">
              Discover your best potential of english learning
            </h1>
            <p className="text-gray-400 font-bold 2xl:text-base text-sm">
              is one of the most popular and rapidly growing English language
              course institutions in East Jakarta. The main advantage of Facile
              Course is that it has the most complete program in East Jakarta,
              with a total of 45 programs offered. Starting from grammar,
              speaking, pronunciation, listening, reading, TOEFL and IELTS. The
              program is available from basic to advanced levels.
            </p>
            <div>
              <button className="transition-all hover:-translate-x-1 hover:-translate-y-1 font-bold 2xl:px-6 px-4 2xl:py-3 py-2 rounded-xl bg-[#A084DC] text-white">
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
        <div id="skills" className="py-28">
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
        <div id="tips" className="py-28 flex flex-col mb-20">
          <div className="title">
            <h1 className="2xl:w-1/4 w-1/2 font-extrabold text-5xl">
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
        {/* About us */}
        <div id="about" className="py-28 flex flex-col gap-y-20">
          <h1 className=" font-extrabold 2xl:text-5xl text-4xl">
            Facile English Course <br /> the easiest way to learn english
          </h1>
          <div className="flex justify-between w-full gap-x-5 ">
            <div className="left  w-1/2 flex flex-col gap-y-10 mt-20">
              <p className=" font-bold left 2xl:text-xl  ">
                is one of the most popular and rapidly growing English language
                course institutions in East Jakarta. The main advantage of
                Facile Course is that it has the most complete program in East
                Jakarta, with a total of 45 programs offered. Starting from
                grammar, speaking, pronunciation, listening, reading, TOEFL and
                IELTS. The program is available from basic to advanced levels.
              </p>
              <p className="text-xl">
                Tertarik bergabung di Facile English Course?
              </p>
            </div>

            <div className="right w-1/2">
              <Lottie animationData={about} />
            </div>
          </div>
        </div>
        {/* About us */}
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
          <p className="text-gray-400 font-bold 2xl:text-base text-sm">{i.desc}</p>
        </div>
      </div>
    </>
  );
}

function CardTips({ i }) {
  return (
    <>
      <div className="flex justify-start items-start gap-x-5 rounded-xl shadow-2xl 2xl:w-4/5">
        <div className="number h-60 w-56 bg-[#A084DC] rounded-xl flex justify-center items-center">
          <h1 className="font-extrabold text-white text-5xl">{i.id}</h1>
        </div>
        <div className="content flex flex-col gap-y-4 justify-center py-2 pr-5 w-3/4">
          <h1 className="font-bold text-lg">{i.title}</h1>
          <p className="2xl:text-base text-sm">{i.desc}</p>
        </div>
      </div>
    </>
  );
}
