import React from "react";
import Logo from "../assets/logo/FASCIST COURSE.svg";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-y-20">
        <div className="w-screen flex justify-between items-start py-16 px-16 gap-x-10">
          <div className="left w-1/3 flex flex-col gap-y-10">
            <div className="icon flex gap-x-4 items-center">
              <img
                className="w-[13%] z-20  hover:-translate-y-1 ease-in-out transition hover:scale-110"
                src={Logo}
                alt=""
              />
              <h1 className="font-bold text-3xl">Facile English Course</h1>
            </div>
            <p className="text-gray-400 font-bold">
              Facile English Course adalah sebuah kursusan bahasa inggris yang
              dibuat pada 2015 di matraman, jakarta timur indonesia. dengan
              tujuan dan kepercayaan yang dibentuk dalam kursusan ini,
              alhamdulillah Facile English Course telah berhasil mendidik 13.072
              murid.
            </p>
            <p className="text-gray-400 font-bold">
              Gedung Sapta putri nugraha, matraman No.17 Jakarta timur 10110
              Email : FacileEnglishcourse@gmail.com
            </p>
          </div>
          <div className="center w-1/4 flex flex-col gap-y-10">
            <h1 className="font-bold text-3xl">Social Media</h1>
            <ul className="flex flex-col gap-y-5">
              <li className="font-bold text-gray-400 text-2xl">Instagram</li>
              <li className="font-bold text-gray-400 text-2xl">Facebook</li>
              <li className="font-bold text-gray-400 text-2xl">Twitter</li>
              <li className="font-bold text-gray-400 text-2xl">Linkedin</li>
            </ul>
          </div>
          <div className="right w-1/5 flex flex-col gap-y-10">
            <h1 className="font-bold text-3xl">Support Us</h1>
            <ul className="flex flex-col gap-y-5">
              <li className="font-bold text-gray-400 text-2xl">
                Support Center
              </li>
              <li className="font-bold text-gray-400 text-2xl">FeedBack</li>
              <li className="font-bold text-gray-400 text-2xl">Accesbility</li>
              <li className="font-bold text-gray-400 text-2xl">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="py-5 lg:w-full w-11/12 flex justify-center items-center text-gray-400">
          <h1>© 2022 Facile English Course 2023 All Right Reserved</h1>
        </div>
      </div>
    </>
  );
}
