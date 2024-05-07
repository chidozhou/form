"use client";

import arrow from "../arrow-left.svg";
import symbol from "../Symbol.svg";

export default function Home({
  prevStep,
  handleChange,
  values,
  handleImageChange,
}) {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <main className="mx-auto mt-10 flex w-4/5 flex-1 flex-col items-center justify-center text-center">
      <div className="flex w-full flex-col shadow-2xl md:w-4/5 md:flex-row">
        <div className="relative flex w-full flex-col bg-slate-50 p-5 md:w-1/3">
          <div className="mb-2 flex items-center">
            {/* <Image src={arrow} alt='arrow' width={25} quality={100} /> */}
            <p className="ml-2 text-blue-800">Back</p>
          </div>
          {/* image */}
          <div className="relative flex flex-grow items-center justify-center px-4">
            <div className="relative">
              {/* <Image src={symbol} alt='symbol' width={250} quality={100} /> */}
              <div className="absolute left-0 top-0">
                {/* <Image src={arrow} alt="topImage" width={100} /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-6 py-10 md:w-2/3 md:px-12 md:py-20">
          <div className="font-['SF Pro Display'] mb-10 text-3xl font-medium text-zinc-800 md:text-5xl">
            Create New Staff
          </div>
          <form className="mx-auto w-full max-w-lg">
            <div>
              {values.id ? (
                <>
                  <img
                    src={URL.createObjectURL(values.id)}
                    alt="Preview"
                    width="200"
                  />
                  <p>{values.idName}</p>
                </>
              ) : (
                <input
                  className="mb-4 mt-2 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-2 md:px-10"
                  type="file"
                  placeholder="ID Card"
                  required
                  onChange={(e) => handleImageChange("id")(e)}
                  accept="image/*"
                />
              )}
            </div>

            <div>
              <input
                className="mb-4 mt-2 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-2 md:px-10"
                type="text"
                placeholder="Company"
                value={values.company}
                onChange={handleChange("company")}
                required
              />
            </div>
            <div>
              <input
                className="mb-4 mt-2 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-2 md:px-10"
                type="text"
                placeholder="Address"
                value={values.address}
                onChange={handleChange("address")}
                required
              />
            </div>
            <div>
              <input
                className="mb-10 mt-5 w-full rounded-lg px-6 pb-5 pt-5 shadow-lg md:mb-5 md:px-10"
                type="text"
                placeholder="User/Client"
                value={values.clientuser}
                onChange={handleChange("clientuser")}
                required
              />
            </div>

            <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-20">
              <button
                onClick={Previous}
                className="te mb-2 mt-2 inline-flex h-14 w-full items-center justify-center gap-[13.30px] rounded-[10.64px] border-2 border-blue-500 px-4 font-semibold text-blue-600 md:mb-20 md:mt-10 md:w-1/4 md:px-10"
              >
                Previous
              </button>
              <button className="mb-2 mt-2 inline-flex h-14 w-full items-center justify-center gap-[13.30px] rounded-[10.64px] bg-blue-500 text-white md:mb-20 md:mt-10 md:w-1/4">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
