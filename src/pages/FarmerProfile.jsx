import React, { useState } from 'react';

const FarmerProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    farmName: 'Doe Farm',
    location: 'Accra', // or default location
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          {/* Place your photo or graphic here */}
          <img src="/path/to/photo.jpg" alt="Farmer" className="object-cover w-full h-full rounded-l-lg" />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-6">Farmer Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="firstName">First Name</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="lastName">Last Name</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="phone">Phone</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="tel"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="farmName">Farm Name</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="farmName"
                name="farmName"
                value={profile.farmName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="location">Location</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="location"
                name="location"
                value={profile.location}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
