import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="p-5 text-center">
      <div className="fullCard  p-5 rounded-md hover:shadow-lg transition-all ">
        <img className=" w-32 mx-auto my-4" src={service.image} alt="" />
        <h3 className="text-[#16322E] text-2xl font-bold my-2">
          {service.service}
        </h3>
        <h3 className="text-2xl font-semibold text-blue-950 my-2">
          {" "}
          ${service.price}{" "}
        </h3>
        <p> {service.about} </p>
      </div>
    </div>
  );
};

export default ServiceCard;
