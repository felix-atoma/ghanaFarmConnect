import React, { useState } from 'react';
import { FaHandHoldingHeart, FaLeaf, FaGenderless, FaGlobe } from 'react-icons/fa'; // Importing icons
import SocialMediaLinks from '../layout/SocialMediaLinks';
import WhatsAppIcon from '../layout/WhatsappIcon';
import SolutionsCarousel from '../layout/Solutions';
import Testimonials from '../layout/Testimonials';

const Home = () => {
  const [inputActive, setInputActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setInputActive(true);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Welcome to FarmConnect Ghana</h2>
      
      {/* Header Video */}
      <video className="w-full mb-6 rounded-lg shadow-lg" controls>
        <source src="/path/to/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <p className="mb-8 text-lg">
        FarmConnect Ghana is a web application aimed to bridge the gap between Ghanaian farmers and customers, 
        enabling efficient and direct trade. The platform facilitates real-time communication, allowing for 
        seamless interactions and transactions.
      </p>
      
      <h3 className="text-3xl font-semibold mb-4 text-center">Our Contribution to Sustainable Development Goals (SDGs)</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* SDG 1: No Poverty */}
        <div className="flex flex-col items-center text-center">
          <FaHandHoldingHeart className="text-5xl text-green-500 mb-4" /> 
          <h4 className="text-xl font-bold mb-2">SDG 1: No Poverty</h4>
          <p>
            FarmConnect Ghana helps reduce poverty by improving market access and profitability for smallholder 
            farmers in Ghana, increasing their income and livelihood opportunities.
          </p>
        </div>

        {/* SDG 2: Zero Hunger */}
        <div className="flex flex-col items-center text-center">
          <FaLeaf className="text-5xl text-green-500 mb-4" /> 
          <h4 className="text-xl font-bold mb-2">SDG 2: Zero Hunger</h4>
          <p>
            By facilitating better market access and fairer prices for agricultural produce, FarmConnect Ghana 
            contributes to reducing hunger and improving food security in Ghana.
          </p>
        </div>

        {/* SDG 5: Gender Equality */}
        <div className="flex flex-col items-center text-center">
          <FaGenderless className="text-5xl text-green-500 mb-4" /> 
          <h4 className="text-xl font-bold mb-2">SDG 5: Gender Equality</h4>
          <p>
            FarmConnect Ghana empowers women farmers by providing equal access to market information, resources, 
            and opportunities, promoting gender equality in agriculture.
          </p>
        </div>

        {/* SDG 13: Climate Action */}
        <div className="flex flex-col items-center text-center">
          <FaGlobe className="text-5xl text-green-500 mb-4" /> 
          <h4 className="text-xl font-bold mb-2">SDG 13: Climate Action</h4>
          <p>
            By promoting sustainable farming practices, FarmConnect Ghana contributes to climate action and 
            environmental sustainability in Ghana’s agricultural sector.
          </p>
        </div>

        {/* Add additional SDG sections if needed */}
        <SocialMediaLinks />
        <WhatsAppIcon />
        <SolutionsCarousel />
        
      </div>
      <Testimonials />
      
      {/* Signup Form */}
      <div className="container mx-auto my-8 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay updated! Enter your email here</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-sm">
          {submitted ? (
            <p className="text-green-500 text-lg">Thank you for submitting!</p>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 mb-4 border-b-2 focus:outline-none ${inputActive ? 'border-orange-500' : 'border-gray-300'} focus:ring-0`}
              />
              <button
                onClick={handleClick}
                className="w-full px-4 py-2 bg-[#71B34A] text-[#FFFFFF] rounded-lg hover:bg-green-700"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
