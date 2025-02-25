import React from "react";
import { FaTools, FaPhoneAlt, FaMoneyBillWave, FaLightbulb } from "react-icons/fa";
import teamImage from "../assets/team.jpg";

const features = [
  {
    title: "Personalized Solutions",
    desc: "We give our customers an unmatched personalized solution as per their needs.",
    icon: <FaTools size={50} className="text-blue-600" />,
  },
  {
    title: "Premium Customer Support",
    desc: "We provide premium 24x7 support to our customers.",
    icon: <FaPhoneAlt size={50} className="text-blue-600" />,
  },
  {
    title: "Best Service @ Low Cost",
    desc: "We believe in customer delight rather than in the number of customers.",
    icon: <FaMoneyBillWave size={50} className="text-blue-600" />,
  },
  {
    title: "Innovation & Implementations",
    desc: "We drive innovation for business success.",
    icon: <FaLightbulb size={50} className="text-blue-600" />,
  },
];

const Features = () => {
  return (
    <section className="container mx-auto py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Main Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-blue-50 p-8 rounded-3xl shadow-xl transition-colors duration-300 ease-in-out hover:bg-blue-900 hover:text-white cursor-pointer flex flex-col items-center justify-center h-72"
            >
              <div className="text-center mb-4 w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-center leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border-2 border-blue-300 rounded-3xl p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 relative flex flex-col justify-between">
          <div className="w-full h-64 overflow-hidden rounded-t-3xl mb-4">
            <img
              src={teamImage}
              alt="Team Discussion"
              className="w-full h-full object-cover object-center rounded-t-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Be a part of success story building Team
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Good News is that we are hiring for various profiles and for
            various locations. We are also looking for interns for winter
            internship and live projects.
          </p>
          <button className="bg-blue-900 text-white py-2 px-6 rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800">
            Join us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
