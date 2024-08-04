import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setRole(role);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    if (role === 'farmer') {
      navigate('/farmer-profile');
    } else if (role === 'customer') {
      navigate('/customer-profile');
    }
  };

  return (
    <div className="flex max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-1/2 p-6">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Register</h2>
        <div className="mb-4 flex flex-col space-y-2">
          <div
            className="bg-green-200 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleRoleChange('farmer')}
          >
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m0 0v-7m0 7h7m-7 0H5m7-9.25a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zM12 2v7m0 0v7m0 0h7m-7 0H5" />
              </svg>
              <span className="text-green-600">Register as Farmer</span>
            </div>
          </div>
          <div
            className="bg-orange-200 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleRoleChange('customer')}
          >
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m0 0v-7m0 7h7m-7 0H5m7-9.25a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zM12 2v7m0 0v7m0 0h7m-7 0H5" />
              </svg>
              <span className="text-orange-600">Register as Customer</span>
            </div>
          </div>
        </div>

        {role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Social Media Sign-Up */}
            <div className="flex justify-around mb-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Sign Up with Google</button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Sign Up with Facebook</button>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">Sign Up with Yahoo</button>
            </div>

            {/* Sign-Up Form */}
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="firstName">First Name</label>
              <input
                className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="lastName">Last Name</label>
              <input
                className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="phone">Phone</label>
              <input
                className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="password">Password</label>
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
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-black font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
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
                  {confirmPasswordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Register
            </button>
          </form>
        )}
      </div>
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        {/* Add a photo or illustration here */}
        <img src="path-to-your-image.jpg" alt="Registration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Register;
