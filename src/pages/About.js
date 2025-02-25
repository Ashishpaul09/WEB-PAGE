import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-600 mb-4">
        <strong>Overview:</strong> Founded in 2014, Bridge Group Solutions (B.G.S) began
        as one of India's original project outsourcing startups, aiming to bridge
        gaps in process management and outsourcing. Over time, we expanded into
        various sectors, including technology, wealth management, and talent
        management solutions.
      </p>
      <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Core Values</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>People:</strong> Respect, compassion, and commitment to communities.</li>
        <li><strong>Integrity:</strong> Conducting operations with honesty and respect.</li>
        <li><strong>Customer Delight:</strong> A customer-centric culture.</li>
        <li><strong>Excellence:</strong> High standards in execution and service quality.</li>
        <li><strong>Trust:</strong> Accountability in every transaction.</li>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Client Testimonials</h3>
      <div className="space-y-3">
        <p className="text-gray-600 italic">“Customer-centric approach. Innovative solutions tailored as per the requirement of the customers. Great experience!” – Shubham Khampariya</p>
        <p className="text-gray-600 italic">“A place where you find better opportunities for investment. Comfortable and helping environment.” – Jyotika Raymond</p>
        <p className="text-gray-600 italic">“Good organization with good services and employees who are always ready to help their customers.” – Iravadi Sharma</p>
      </div>
    </div>
  );
};

export default AboutUs;
