import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await register(formData);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-orange-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-500 p-4 text-white text-center">
          <h2 className="text-3xl font-bold">Register</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
        <div className="bg-orange-500 p-4 text-white text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} FarmConnect Ghana. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
