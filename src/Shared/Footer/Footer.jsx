import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="fullFooter container mx-auto py-12 grid grid-cols-4">
        <div className="location my-2 text-[15px] w-11/12 font-semibold">
          <h5 className="flex">
            <div className="logo text-xl mx-1">
              <HiLocationMarker />{" "}
            </div>
            H#000(0th Floor),Road ##00, NewDOSH, Dhaka Bangladesh.{" "}
          </h5>
        </div>
        <div className="company">
          <h3 className="text-xl font-bold my-3">Company</h3>
          <ul>
            <li className="my-2">About</li>
            <li className="my-2">Project</li>
            <li className="my-2">Our Team</li>
            <li className="my-2">Trams Conditions</li>
            <li className="my-2">Submit Listing</li>
          </ul>
        </div>
        <div className="QuickLinks">
          <h3 className="text-xl font-bold my-3">Quick Links</h3>
          <ul>
            <li className="my-2">Sales</li>
            <li className="my-2">Rentals</li>
            <li className="my-2">Contact</li>
            <li className="my-2">Our Blog</li>
          </ul>
        </div>
        <div className="aboutUs">
          <h3 className="text-xl font-bold my-3">About Us</h3>
          <p className="my-7 text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            dolorem quae quaerat doloribus, ab cum!
          </p>
          <div className="socials text-white flex text-3xl justify-between w-1/2">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </div>
      </div>
      <div className="text">
        <h5 className="text-center text-gray-200 py-4">
          ©Copyright Programming Hero 2021
        </h5>
      </div>
    </div>
  );
};

export default Footer;
