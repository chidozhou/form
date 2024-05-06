"use client";

import Image from "next/image";
import arrow from "../arrow-left.svg";
import symbol from "../Symbol.svg";
// import topImage from "../Ellipse 11.svg";

export default function Home({ prevStep, handleChange, values }) {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <main className="flex flex-col items-center justify-center w-4/5 flex-1 text-center mx-auto mt-10">
      <div className="shadow-2xl flex flex-col md:flex-row w-full md:w-4/5">
        <div className="w-full md:w-1/3 p-5 bg-slate-50 flex flex-col relative">
          <div className="flex items-center mb-2">
            <Image src={arrow} alt="arrow" width={25} quality={100} />
            <p className="text-blue-800 ml-2">Back</p>
          </div>
          {/* image */}
          <div className="px-4 flex flex-grow justify-center items-center relative">
            <div className="relative">
              <Image src={symbol} alt="symbol" width={250} quality={100} />
              <div className="absolute top-0 left-0">
                <Image src={arrow} alt="topImage" width={100} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-white px-6 md:px-12 py-10 md:py-20">
          <div className="text-zinc-800 text-3xl md:text-5xl font-medium font-['SF Pro Display'] mb-10">
            Create New Staff
          </div>
          <form className="w-full max-w-lg mx-auto">
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-2 mb-4 md:mb-2 pt-5 pb-5 px-6 md:px-10"
                type="file"
                placeholder="ID Card"
                required
              />
            </div>
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-2 mb-4 md:mb-2 pt-5 pb-5 px-6 md:px-10"
                type="text"
                placeholder="Company"
                value={values.company}
                onChange={handleChange("company")}
                required
              />
            </div>
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-2 mb-4 md:mb-2 pt-5 pb-5 px-6 md:px-10"
                type="text"
                placeholder="Address"
                value={values.address}
                onChange={handleChange("address")}
                required
              />
            </div>
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-5 mb-10 md:mb-5 pt-5 pb-5 px-6 md:px-10"
                type="text"
                placeholder="User/Client"
                value={values.clientuser}
                onChange={handleChange("clientuser")}
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-20 justify-center">
              <button
                onClick={Previous}
                className="mt-2 md:mt-10 w-full md:w-1/4 mb-2 md:mb-20 px-4 md:px-10 h-14 te rounded-[10.64px] justify-center items-center gap-[13.30px] inline-flex font-semibold text-blue-600 border-2 border-blue-500"
              >
                Previous
              </button>
              <button className="mt-2 md:mt-10 w-full md:w-1/4 mb-2 md:mb-20 h-14 bg-blue-500 rounded-[10.64px] justify-center items-center gap-[13.30px] inline-flex text-white">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
