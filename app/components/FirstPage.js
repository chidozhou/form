"use client";

import Image from "next/image";
import arrow from "../arrow-left.svg";
import symbol from "../Symbol.svg";

export default function firstPage({ nextStep, handleChange, values }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  // Validation functions
  const validateName = (name) => /^[a-zA-Z]*$/.test(name);
  const validatePhone = (phoneNumber) => /^\d+$/.test(phoneNumber);

  return (
    <main className="flex flex-col items-center justify-center w-4/5 flex-1 text-center mx-auto mt-10">
      <div className="shadow-2xl flex flex-col md:flex-row w-full md:w-4/5">
        <div className="w-full md:w-1/3 p-5 bg-slate-50 flex flex-col">
          <div className="flex items-center mb-2">
            <Image src={arrow} alt="arrow" width={25} quality={100} />
            <p className="text-blue-800 ml-2">Back</p>
          </div>
          {/* image */}
          <div className="px-4 flex flex-grow justify-center items-center">
            <div className="relative" style={{ marginLeft: "-10px" }}>
              <Image src={symbol} alt="symbol" width={250} quality={100} />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-white px-6 md:px-12 py-10 md:py-20">
          <div className="text-zinc-800 text-3xl md:text-5xl font-medium font-['SF Pro Display'] mb-10">
            Create New Staff
          </div>
          <form className="w-full max-w-lg mx-auto pd-4">
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-2 mb-4 md:mb-2 pt-5 pb-5 px-6 md:px-10"
                type="text"
                placeholder="Enter First Name"
                required
                value={values.firstName}
                onChange={handleChange("firstName")}
                pattern="[A-Za-z]+"
                title="Only characters are allowed"
              />
            </div>
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-2 mb-4 md:mb-2 pt-5 pb-5 px-6 md:px-10"
                type="text"
                placeholder="Enter Last Name"
                required
                value={values.lastName}
                onChange={handleChange("lastName")}
                pattern="[A-Za-z]+"
                title="Only characters are allowed"
              />
            </div>
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-2 mb-4 md:mb-2 pt-5 pb-5 px-6 md:px-10"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <input
                className="rounded-lg shadow-lg w-full mt-5 mb-10 md:mb-5 pt-5 pb-5 px-6 md:px-10"
                type="text"
                placeholder="Enter Phone Number"
                required
                value={values.phoneNumber}
                onChange={handleChange("phoneNumber")}
                pattern="[0-9]*"
                title="Only numbers are allowed"
              />
            </div>
            <button
              onClick={Continue}
              className="mt-10 md:mt-10 w-full md:w-2/4 mb-2 md:mb-20 h-14 font-semibold bg-blue-500 rounded-[10.64px] justify-center items-center gap-[13.30px] inline-flex text-white"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
