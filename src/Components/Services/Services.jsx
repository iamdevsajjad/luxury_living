import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      image: "https://i.ibb.co/N2Q3hL8/apartment-1.png",
      service: "office interior Design",
      price: 299,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores facere ipsum a. Porro impedit unde ipsa consequatur pariatur. Ex?",
    },
    {
      image: "https://i.ibb.co/sQjxsVy/affordable-1.png",
      service: "Showroom Design",
      price: 399,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores facere ipsum a. Porro impedit unde ipsa consequatur pariatur. Ex?",
    },
    {
      image: "https://i.ibb.co/8K3y2cM/lessee-1.png",
      service: "Residential/Home",
      price: 499,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores facere ipsum a. Porro impedit unde ipsa consequatur pariatur. Ex?",
    },
  ];
  return (
    <div className="mb-10">
      <div className="fullBanner container mx-auto my-36">
        <div className="texts text-blue-950 w-2/4 mx-auto text-center mb-14">
          <p className="font-semibold text-xl my-7">services</p>
          <h2 className="text-4xl font-semibold">
            We're an agency tailored to all client's needs that always delivers
          </h2>
        </div>
        <div className="serviceCard flex">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
        <button className="bg-[#251D58] text-white px-7 py-2 rounded-sm hover:bg-blue-900 transition-all mx-auto flex my-7">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
