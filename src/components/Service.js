import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const services = [
    {
      title: "Risk Management",
      description:
        "Risk management involves identifying, evaluating, and prioritizing risks, followed by coordinated application of resources to minimize or control unfortunate events.",
      icon: "/images/risk.png",
    },
    {
      title: "Portfolio Management",
      description:
        "Portfolio management balances investments with objectives, asset allocation, and risk performance for individuals and institutions.",
      icon: "/images/portfolio.png",
    },
    {
      title: "Wealth Management",
      description:
        "Wealth management integrates financial planning, portfolio management, and a range of aggregated financial services.",
      icon: "/images/wealth.png",
    },
    {
      title: "Project Outsourcing",
      description:
        "Outsourcing enables companies to subcontract tasks or departments, enhancing efficiency and expertise.",
      icon: "/images/outscoring.png",
    },
    {
      title: "ERP & Customized Software",
      description:
        "ERP solutions streamline business processes through integrated applications, automating back-office functions.",
      icon: "/images/erp.jpeg",
    },
  ];

  const sectionRef = useRef(null); // Container ref
  const cardRefs = useRef([]); // Card refs

  useEffect(() => {
    const cards = cardRefs.current.filter((card) => card); // Filter out null refs

    // Set perspective for 3D depth
    gsap.set(sectionRef.current, { perspective: 1200 });

    // ScrollTrigger Entrance Animation
    const scrollTriggers = cards.map((card, index) => {
      return ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play none none reverse",
        animation: gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 150,
            z: -300,
            rotationX: 120,
            rotationY: index % 2 === 0 ? -40 : 40,
          },
          {
            opacity: 1,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1.5,
            ease: "power4.out",
          }
        ),
      });
    });

    // Event handler functions (stored for cleanup)
    const handleMouseEnter = (card, img) => {
      gsap.to(card, {
        z: 80,
        rotationY: 30,
        rotationX: 25,
        scale: 1.15,
        boxShadow: "0 30px 60px rgba(0, 0, 255, 0.5)",
        background: "linear-gradient(to right, #3b82f6, #1e40af)",
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
      gsap.to(img, {
        z: 50,
        scale: 1.2,
        rotationZ: 10,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
      gsap.to(card.querySelector("h3"), {
        z: 20,
        color: "#ffffff",
        duration: 0.6,
      });
      gsap.to(card.querySelector("p"), {
        z: 10,
        color: "#e5e7eb",
        duration: 0.6,
      });
    };

    const handleMouseLeave = (card, img) => {
      gsap.to(card, {
        z: 0,
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.8)",
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(img, {
        z: 0,
        scale: 1,
        rotationZ: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(card.querySelector("h3"), {
        z: 0,
        color: "#1f2937",
        duration: 0.6,
      });
      gsap.to(card.querySelector("p"), {
        z: 0,
        color: "#4b5563",
        duration: 0.6,
      });
    };

    const handleMouseMove = (e, card, img) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = (x - centerX) / 8;
      const rotateX = (centerY - y) / 8;

      gsap.to(card, {
        rotationY: rotateY,
        rotationX: rotateX,
        z: 30,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(img, {
        rotationY: rotateY / 2,
        rotationX: rotateX / 2,
        z: 60,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Enhanced Hover and Mouse Effects
    const listeners = cards.map((card) => {
      gsap.set(card, { transformStyle: "preserve-3d" });
      const img = card.querySelector("img");
      gsap.set(img, { transformStyle: "preserve-3d" });

      const onMouseEnter = () => handleMouseEnter(card, img);
      const onMouseLeave = () => handleMouseLeave(card, img);
      const onMouseMove = (e) => handleMouseMove(e, card, img);

      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);
      card.addEventListener("mousemove", onMouseMove);

      return { card, onMouseEnter, onMouseLeave, onMouseMove };
    });

    // Cleanup event listeners and ScrollTriggers on unmount
    return () => {
      // Remove event listeners
      listeners.forEach(({ card, onMouseEnter, onMouseLeave, onMouseMove }) => {
        if (card) {
          card.removeEventListener("mouseenter", onMouseEnter);
          card.removeEventListener("mouseleave", onMouseLeave);
          card.removeEventListener("mousemove", onMouseMove);
        }
      });

      // Cleanup ScrollTriggers
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto py-16 px-4 md:px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Our Best Services
      </h2>
      <p className="text-center text-gray-600 text-lg mb-12">
        We have grown in different sectors in no time because of unmatched
        services. Below are a few of these.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg text-center transition-all duration-300 ease-in-out"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-40 h-40 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;