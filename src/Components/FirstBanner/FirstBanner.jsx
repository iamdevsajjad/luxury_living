import React from "react";

const FirstBanner = () => {
  return (
    <div className="  bg-[#F6F6F6] ">
      <div className="mainDiv flex container mx-auto py-20 justify-between ">
        <div className="text w-1/3 my-auto">
          <h1 className="text-6xl font-bold text-blue-950">
            We Build Your Dream
          </h1>
          <code>
            <p className="text-sm my-6 ">
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
          </code>
          <button className="bg-[#251D58] text-white px-7 py-2 rounded-sm hover:bg-blue-900 transition-all">
            Booking
          </button>
        </div>
        <div className="photo w-1/3 ">
          <img
            className="rounded-sm"
            src="https://i.ibb.co/8PjMLnY/first-Banner1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
