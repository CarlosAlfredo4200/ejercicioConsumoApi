import React from "react";

const input = ({dato, handle}) => {

 
  return (
    <>
      <div className=" items-center m-5  ">
        <label htmlFor="" className="relative">
          <input
            type="text"
            name="titulo"
            onChange={handle}
            className="h-14 w-11/12   text-lg bg-slate-300 border-solid border-2 border-black rounded-lg 
            border-white border-opacity-50 outline-none focus:border-blue-500 
            focus:text-white transition duration-500 px-6"

          />
          <span className="text-2xl text-white text-opacity-90 absolute 
          left-0 mt-2 mx-6 px-1 transition duration-200 input-text">
             {dato}
          </span>
        </label>
      </div>
    </>
  );
};

export default input;
