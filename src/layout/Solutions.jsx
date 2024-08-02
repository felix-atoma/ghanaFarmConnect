import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SolutionsCarousel = () => {
  const [showMore, setShowMore] = useState(false);

  const solutions = [
    {
      image: 'src/assets/apples-1872997_640.jpg',
      caption: 'Expanding Market Access for Farmers',
      moreText: 'Our platform allows farmers to reach broader markets, ensuring their produce is seen by a wider audience, increasing their sales potential and reducing waste.',
    },
    {
      image: 'src/assets/tractor-385681_1280.jpg',
      caption: 'Ensuring Price Transparency and Fairness',
      moreText: 'By providing clear pricing directly from the farmers, we eliminate middlemen, ensuring that farmers get fair prices for their hard work, and buyers get transparent pricing.',
    },
    {
      image: 'src/assets/fruit-3247447_640.jpg',
      caption: 'Providing Market Information and Trends',
      moreText: 'Farmers can access vital market trends and data, helping them make informed decisions about what crops to grow and when to sell, maximizing their profitability.',
    },
    {
      image: 'src/assets/1524808aeef81a986379fcc475f4b1ce.jpg',
      caption: 'Facilitating Direct Communication and Negotiation',
      moreText: 'Our messaging feature allows direct communication between farmers and buyers, enabling them to negotiate terms, discuss quantities, and arrange deliveries efficiently.',
    },
  ];

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="relative w-full h-screen">
      {showMore ? (
        <div className="absolute inset-0 bg-black text-white flex items-center justify-center p-8 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{solutions[0].caption}</h2>
            <p className="mb-4">{solutions[0].moreText}</p>
            <button 
              onClick={handleReadMore} 
              className="bg-white text-black py-2 px-4 rounded"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <>
          <Carousel 
            showArrows={true} 
            showThumbs={false} 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={1000}
            useKeyboardArrows={true}
            showStatus={false}
            className="h-full"
          >
            {solutions.map((solution, index) => (
              <div key={index} className="relative w-full h-full">
                <img src={solution.image} alt={`Solution ${index + 1}`} className="object-cover w-full h-full" />
                <p className="absolute bottom-0 left-0 w-full text-white bg-black bg-opacity-50 text-center py-2">
                  {solution.caption}
                </p>
              </div>
            ))}
          </Carousel>
          <button 
            onClick={handleReadMore} 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Read More
          </button>
        </>
      )}
    </div>
  );
};

export default SolutionsCarousel;
