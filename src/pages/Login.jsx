import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';// Make sure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
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
    setError(''); // Clear previous error

    try {
      await login(formData);
      if (isAuthenticated()) {
        navigate('/'); // Redirect to home page after successful login
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Login failed: Incorrect email or password');
      } else if (error.response && error.response.status === 404) {
        setError('Login failed: User not registered');
      } else {
        setError('Login failed: Something went wrong');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-orange-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-600 p-4 text-white text-center">
          <h2 className="text-3xl font-bold">Login</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Login
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

export default Login;
