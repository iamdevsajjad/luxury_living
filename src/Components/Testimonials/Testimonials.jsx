import React from "react";
import { BsCircleFill } from "react-icons/bs";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const users = [
    {
      image: "https://i.ibb.co/fC4PBBs/Ellipse-90.png",
      name: "Nash Patric",
      rank: "Ceo.Manpol",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic itaque laborum aut ex distinctio consequatur.",
      ratings: "",
    },
    {
      image: "https://i.ibb.co/R9dMbKh/Ellipse-91.png",
      name: "Miriam Barron",
      rank: "Ceo.Manpol",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic itaque laborum aut ex distinctio consequatur.",
      ratings: "",
    },
    {
      image: "https://i.ibb.co/DGfkvnx/Ellipse-92.png",
      name: "Bria Malone",
      rank: "Ceo.Manpol",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic itaque laborum aut ex distinctio consequatur.",
      ratings: "",
    },
  ];
  return (
    <div>
      <div className="fullSection bg-[#F6F6F6] py-28">
        <div className="text ">
          <h2 className=" text-center py-10 text-4xl font-bold">
            Testimonials
          </h2>
        </div>
        <div className="Cards flex container">
          {users.map((card, i) => (
            <TestimonialsCard key={i} card={card} />
          ))}
        </div>
        <div className="dot flex text-[#C4C4C4]  w-16 mx-auto justify-around py-7 text-sm">
          <div className="active text-[#251D58]">
            <BsCircleFill />
          </div>
          <BsCircleFill />
          <BsCircleFill />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
