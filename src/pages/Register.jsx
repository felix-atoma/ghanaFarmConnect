import React, { useState } from 'react';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Register</h2>
      <form className="space-y-4">
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
            required
          />
        </div>

        {/* First Name Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Location Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="location">
            Location
          </label>
          <input
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="location"
            name="location"
            placeholder="Enter your location"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
            >
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875C7.52 19.875 3.732 16.283 2.458 12z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.875c-4.48 0-8.268-3.592-9.542-8.875C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-black font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type={confirmPasswordVisible ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
            >
              {confirmPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875C7.52 19.875 3.732 16.283 2.458 12z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.875c-4.48 0-8.268-3.592-9.542-8.875C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-md font-bold hover:bg-orange-500 transition duration-300"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
