import React, { useEffect, useRef } from "react";
import { FaTools, FaPhoneAlt, FaMoneyBillWave, FaLightbulb } from "react-icons/fa";
import teamImage from "../assets/team.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const featureCardsRef = useRef([]);
  const teamCardRef = useRef(null);

  useEffect(() => {
    // Initial animation for section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Feature cards animation
    featureCardsRef.current.forEach((card, index) => {
      // Initial animation
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });

      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotationX: 10,
          rotationY: 10,
          scale: 1.05,
          backgroundColor: "#1E3A8A", // blue-900
          color: "#FFFFFF",
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        });
        gsap.to(card.querySelector(".icon-container"), {
          scale: 1.2,
          rotation: 360,
          duration: 0.4,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          backgroundColor: "#EFF6FF", // blue-50
          color: "#000000",
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        });
        gsap.to(card.querySelector(".icon-container"), {
          scale: 1,
          rotation: 0,
          duration: 0.4,
        });
      });
    });

    // Team card animation
    gsap.from(teamCardRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: teamCardRef.current,
        start: "top 80%",
      },
    });

    // Team card hover
    teamCardRef.current.addEventListener("mouseenter", () => {
      gsap.to(teamCardRef.current, {
        rotationX: 5,
        rotationY: 5,
        scale: 1.03,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    teamCardRef.current.addEventListener("mouseleave", () => {
      gsap.to(teamCardRef.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Main Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => (featureCardsRef.current[idx] = el)}
              className="relative bg-blue-50 p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center h-72"
              style={{ perspective: "1000px" }} // Enable 3D transforms
            >
              <div className="icon-container text-center mb-4 w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-center leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div
          ref={teamCardRef}
          className="bg-white border-2 border-blue-300 rounded-3xl p-8 shadow-xl flex flex-col justify-between"
          style={{ perspective: "1000px" }}
        >
          <div className="w-full h-64 overflow-hidden rounded-t-3xl mb-4">
            <img
              src={teamImage}
              alt="Team Discussion"
              className="w-full h-full object-cover object-center rounded-t-3xl"
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