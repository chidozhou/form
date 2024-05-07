"use client";

import Image from "next/image";
import arrow from "../arrow-left.svg";
import symbol from "../Symbol.svg";
import frontimage from "../frontimage.svg";

export default function firstPage({ nextStep, handleChange, values }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  // Validation functions
  const validateName = (name) => /^[a-zA-Z]*$/.test(name);
  const validatePhone = (phoneNumber) => /^\d+$/.test(phoneNumber);

  return (
    <main className="mx-auto mt-10 flex w-4/5 flex-1 flex-col items-center justify-center text-center">
      <div className="flex w-full flex-col shadow-2xl md:w-4/5 md:flex-row">
        <div className="flex w-full flex-col bg-slate-50 p-5 md:w-1/3">
          <div className="mb-2 flex items-center">
            <Image src={arrow} alt="arrow" width={25} quality={100} />
            <p className="ml-2 text-blue-800">Back</p>
          </div>
          {/* image */}
          <div className="flex flex-grow items-center justify-center px-4">
            <div className="relative" style={{ marginLeft: "-10px" }}>
              <Image src={symbol} alt="symbol" width={250} quality={100} />
            </div>
            {/* image on top */}
            <div className="absolute top-0 left-0">
              <Image
                src={frontimage}
                alt="Top Image"
                width={500}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-6 py-10 md:w-2/3 md:px-12 md:py-20">
          <div className="font-['SF Pro Display'] mb-10 text-3xl font-medium text-zinc-800 md:text-5xl">
            Create New Staff
          </div>
          <form className="pd-4 mx-auto w-full max-w-lg">
            <div>
              <input
                className="mb-4 mt-2 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-2 md:px-10"
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
                className="mb-4 mt-2 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-2 md:px-10"
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
                className="mb-4 mt-2 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-2 md:px-10"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <input
                className="mb-10 mt-5 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-5 md:px-10"
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
              className="mb-2 mt-10 inline-flex h-14 w-full items-center justify-center gap-[13.30px] rounded-[10.64px] bg-blue-500 font-semibold text-white md:mb-20 md:mt-10 md:w-2/4"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
