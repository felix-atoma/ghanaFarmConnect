import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h2>
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-md font-bold hover:bg-orange-500 transition duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Profile;
