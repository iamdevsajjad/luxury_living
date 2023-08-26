import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="texts text-center w-1/3 mx-auto my-20">
        <p className="text-blue-900 font-bold text-xl">Contact</p>
        <h3 className="text-4xl font-bold">
          Let us Handle your Project, professionally.
        </h3>
      </div>
      <div className="fullForm  mx-auto w-1/2 ">
        <div className="inputs  grid grid-cols-2 gap-4 mb-3">
          <input
            className="py-4 rounded-md bg-[#F1F3F6] pl-3 outline-none"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="py-4 rounded-md bg-[#F1F3F6] pl-3 outline-none"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="py-4 rounded-md bg-[#F1F3F6] pl-3 outline-none"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="py-4  rounded-md bg-[#F1F3F6] pl-3 outline-none"
            type="number"
            placeholder="Phone Number"
          />
        </div>
        <textarea
          className="w-full rounded-md bg-[#F1F3F6] pl-3 h-40 outline-none"
          placeholder="Your message"
          name="text"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="w-full mx-auto text-center my-3">
          <button className=" bg-blue-900 text-white font-semibold py-2 px-7 rounded-md hover:bg-blue-700 transition-all">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
