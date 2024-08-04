import React, { useState, useEffect } from 'react';

const CustomerProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
  });

  // Fetch the current profile data from an API or local storage
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('/api/customer/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/customer/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating your profile.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          <img src="src/assets/1524808aeef81a986379fcc475f4b1ce.jpg" alt="Customer" className="object-cover w-full h-full rounded-l-lg" />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-6">Customer Profile</h2>
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

export default CustomerProfile;
