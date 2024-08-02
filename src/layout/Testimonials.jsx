import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Farmer A',
      image: 'src/assets/fruit-3247447_640.jpg',
      testimony: 'This platform has helped me reach new customers I never could have before.',
      type: 'farmer',
    },
    {
      id: 2,
      name: 'Customer B',
      image: 'src/assets/05b9eaf58974fb3e6d6d4f3e483a983e.jpg',
      testimony: 'I can now easily buy fresh produce directly from farmers.',
      type: 'customer',
    },
    {
      id: 3,
      name: 'Farmer C',
      image: 'src/assets/9497d22f961e0eaa97b728ac2c83affe.jpg',
      testimony: 'Fair prices and direct communication have made my business more sustainable.',
      type: 'farmer',
    },
    {
      id: 4,
      name: 'Customer D',
      image: 'src/assets/cf5905154302df81375b82f4aeb7514c.jpg',
      testimony: 'Finding quality produce has never been easier!',
      type: 'customer',
    },
    {
      id: 5,
      name: 'Farmer E',
      image: 'src/assets/f3f3c632c3e874d9e920e145d7e91786.jpg',
      testimony: 'This app has changed the way I sell my produce.',
      type: 'farmer',
    },
    {
      id: 6,
      name: 'Customer F',
      image: 'src/assets/1524808aeef81a986379fcc475f4b1ce.jpg',
      testimony: 'I love the transparency and quality.',
      type: 'customer',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const testimoniesPerPage = 3;

  const indexOfLastTestimony = currentPage * testimoniesPerPage;
  const indexOfFirstTestimony = indexOfLastTestimony - testimoniesPerPage;
  const currentTestimonies = testimonials.slice(indexOfFirstTestimony, indexOfLastTestimony);

  const totalPages = Math.ceil(testimonials.length / testimoniesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative py-10">
      <div className="py-10">
        <h2 className="text-center text-2xl font-bold text-black mb-6 h">Live Testimonies</h2>
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          {currentTestimonies.map((testimony) => (
            <div key={testimony.id} className="p-4 rounded-lg shadow-lg w-72" style={{ backgroundColor: '#F7931E' }}>
              <img src={testimony.image} alt={`${testimony.name}`} className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-white">{testimony.name}</h3>
              <p className="text-gray-100 mb-2 text-center">{testimony.testimony}</p>
              <p className="text-sm text-gray-200 text-center">- {testimony.type}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg"
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
