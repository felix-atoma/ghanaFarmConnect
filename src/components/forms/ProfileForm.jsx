import React, { useState } from 'react';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    contact: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle profile submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-2xl mb-4">Edit Profile</h3>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-gray-300 rounded"
          value={profile.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Location</label>
        <input
          type="text"
          name="location"
          className="w-full p-2 border border-gray-300 rounded"
          value={profile.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Contact</label>
        <input
          type="text"
          name="contact"
          className="w-full p-2 border border-gray-300 rounded"
          value={profile.contact}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="bg-[#71B34A] text-[#FFFFFF] px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default ProfileForm;
