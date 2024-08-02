import React, { useState, useEffect, useRef } from 'react';
import { FaHandHoldingHeart, FaLeaf, FaGenderless, FaGlobe } from 'react-icons/fa'; // Importing icons
import SocialMediaLinks from '../layout/SocialMediaLinks';
import WhatsAppIcon from '../layout/WhatsappIcon';
import SolutionsCarousel from '../layout/Solutions';
import Testimonials from '../layout/Testimonials';

const Home = () => {
  const [inputActive, setInputActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const imageRef = useRef();

  const handleClick = () => {
    setInputActive(true);
    setSubmitted(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const imagePosition = imageRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imagePosition < windowHeight) {
        setImageVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Image with overlay and button revealed on scroll */}
      <div
        ref={imageRef}
        className={`fixed inset-0 z-[-1] h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'url("https://via.placeholder.com/800x400") center/cover no-repeat' }}
      >
        <div className="bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Join Us</h2>
          <p className="mb-4 text-lg text-center">Make a difference in Agriculture one step at a time</p>
          <a href="/join-us" className="px-4 py-2 bg-green-500 rounded-full hover:bg-green-700 transition-colors">Get Started</a>
        </div>
      </div>

      <div className="relative z-0 container mx-auto p-4">
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
                  onFocus={() => setInputActive(true)}
                  onBlur={() => setInputActive(false)}
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

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">Agrisolve Ghana Ltd</p>
            <p className="mt-2">We look forward to interacting with you.</p>
            <p className="mt-2">Email: <a href="mailto:info@agrisolvegh.com" className="text-blue-500">info@agrisolvegh.com</a></p>
            <p className="mt-2">Phone: <a href="tel:+233552000004" className="text-blue-500">055-200-0004</a></p>
          </div>
        </div>

        {/* Additional content to ensure full coverage of the image */}
        <div className="relative z-0 bg-white">
          <div className="container mx-auto py-16">
            <h2 className="text-3xl font-bold mb-4">Additional Content</h2>
            <p className="text-lg mb-4">
              This section and others that follow will cover the image completely as you scroll past it. 
              Make sure that your content has a background color (like white) to cover the image.
            </p>
            {/* Add more content here as needed */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
