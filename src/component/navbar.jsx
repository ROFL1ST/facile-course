import React from "react";
import logo from "../assets/logo/FASCIST COURSE.svg";
export default function Navbar() {
  return (
    <>
      <navbar
        className={`flex  justify-between w-full py-12 px-10 items-center  `}
      >
        <img
          src={logo}
          className="w-[3%] z-20  hover:-translate-y-1 ease-in-out transition hover:scale-110"
          alt=""
        />
        <ul className="flex z-20 gap-x-5 font-bold text-lg">
          <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
            Home
          </li>
          <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
            Skills
          </li>
          <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
            Tips & Tricks
          </li>
          <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
            About Us
          </li>
        </ul>
        <ul className="flex gap-x-5 z-20 ">
          <li className=" hover:-translate-y-1 ease-in-out transition hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              className="w-7 h-7 font-bold"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19 22q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35q-.15-.15-.35-.15q-.2 0-.35.15q-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 18q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v6h-3.5q-1.45 0-2.475 1.025Q14 12.05 14 13.5V18Zm8-7l8-5V4l-8 5l-8-5v2Z"
              />
            </svg>
          </li>
        </ul>
      </navbar>
    </>
  );
}
