"use client";
import React, { useState } from "react";

const Xnor = () => {
  const [data, setData] = useState({
    inputOne: "",
    inputTwo: "",
  });
  const [output, setOutput] = useState("");
  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setData({ ...data, [id]: value });
  };
  console.log(data);
  const handleOutput = (e) => {
    if (data.inputOne == data.inputTwo) {
      setOutput("1");
    } else {
      setOutput("0");
    }
    if (data.inputOne > 1 || data.inputTwo > 1) {
      setOutput("Please enter correct values");
    }
    setData({
      inputOne: "",
      inputTwo: "",
    });
  };
  console.log(output);
  return (
    <div>
      <section className="text-gray-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center">
            <h1 className="title-font text-6xl mb-4 font-bold text-gray-100">
              XNOR Gate
            </h1>
            <p className="mb-8 leading-relaxed text-md sm:text-xl font-semibold  text-center md:text-left">
              An XNOR (exclusive NOR) gate is a logic gate that produces a high
              output (1) if and only if the inputs are the same. If the inputs
              are different, the output will be low (0).
            </p>
            <ul className="list-disc font-semibold text-md sm:text-lg sm:mx-0 mx-4">
              <h1 className="text-xl sm:text-2xl font-bold">Functionality:</h1>
              <li>
                The XNOR gate is essentially an XOR gate followed by a NOT gate.
              </li>
              <li>
                It produces a high output (1) only when both inputs are the
                same.
              </li>
              <li>
                It produces a low output (0) when the inputs are different.
              </li>
            </ul>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                WebkitBackdropFilter: "blur(7.5px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
              className="max-w-md sm:max-w-lg mx-4 sm:mx-auto p-5 mt-10"
            >
              <h1 className="text-center text-3xl font-extrabold">XNOR Gate</h1>
              <p className="text-center mt-1"></p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 mt-4">
                  <label htmlFor="inputOne" className="font-semibold">
                    Input one
                  </label>
                  <input
                    type="text"
                    name="inputOne"
                    id="inputOne"
                    placeholder="Enter 0 or 1"
                    className="bg-transparent outline-none border-[3px] border-slate-300 rounded-md p-2 focus:border-slate-500 transition-all font-semibold focus:shadow-[-5px_4px_0px_#fff]"
                    required
                    value={data.inputOne}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="inputTwo" className="font-semibold">
                    Input Two
                  </label>
                  <input
                    type="text"
                    name="inputTwo"
                    id="inputTwo"
                    placeholder="Enter 0 or 1"
                    className="bg-transparent outline-none border-[3px] border-slate-300 rounded-md p-2 focus:border-slate-500 transition-all font-semibold focus:shadow-[-5px_4px_0px_#fff]"
                    required
                    value={data.inputTwo}
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={() => handleOutput()}
                  className="px-14 rounded-lg py-2 border-[3px] hover:shadow-[-5px_4px_0px_#fff] transition-all  "
                >
                  Calculate
                </button>
              </div>
              {output && (
                <h1 className="text-center mt-4 text-xl font-bold">
                  Output: {output}
                </h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Xnor;
