import React from "react";
import { AiFillStar } from "react-icons/ai";

const TestimonialsCard = ({ card }) => {
  return (
    <div>
      <div className="FullCard bg-white m-5 p-3 rounded-sm">
        <div className="person flex mb-6">
          <div className="image">
            <img className="w-16" src={card.image} alt="" />
          </div>
          <div className="nameAndRankin font-semibold my-auto mx-4">
            <div className="name text-xl">{card.name}</div>
            <div className="ranking">{card.rank}</div>
          </div>
        </div>
        <div className="others my-4">
          <div className="texts my-3">{card.about}</div>
          <div className="stars flex text-2xl text-yellow-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
