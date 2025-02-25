import React from "react";
import teamImage from "../assets/team.jpg";

const NextSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 flex flex-col items-center text-center text-white min-h-[400px]" // Added min-height
      style={{ backgroundImage: `url(${teamImage})` }}
      aria-label="Guidance Section" // Added accessibility
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/50" /> {/* Simplified opacity syntax */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl px-4"> {/* Added max-width and padding */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"> {/* Responsive text and spacing */}
          You Always Get the Best Guidance
        </h2>
        <button 
          className="bg-white text-blue-600 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" // Added focus states
          aria-label="Request a Quote" // Added accessibility
        >
          Request Quote
        </button>
      </div>
    </section>
  );
};

export default NextSection;