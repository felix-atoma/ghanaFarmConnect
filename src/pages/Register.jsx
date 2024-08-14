import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement your registration logic here
    // For example, call Firebase authentication or your backend API

    // Redirect to the appropriate dashboard based on role
    if (role === 'farmer') {
      navigate('/farmer-dashboard'); // Adjust the path as needed
    } else {
      navigate('/customer-dashboard'); // Adjust the path as needed
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-100 p-6 flex items-center justify-center">
        <img src="src/assets/register-image.jpg" alt="Register" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Register</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1" htmlFor="role">I am a:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="customer">Customer</option>
              <option value="farmer">Farmer</option>
            </select>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
              >
                {passwordVisible ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875C7.52 19.875 3.732 16.283 2.458 12z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.875c-4.48 0-8.268-3.592-9.542-8.875C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875z" />
                  </svg>
                )}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
              >
                {confirmPasswordVisible ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875C7.52 19.875 3.732 16.283 2.458 12z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.004a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.875c-4.48 0-8.268-3.592-9.542-8.875C3.732 7.717 7.52 4.125 12 4.125c1.47 0 2.86.447 4.014 1.227a9.96 9.96 0 012.204 2.012A9.936 9.936 0 0121.6 12a9.936 9.936 0 01-3.382 5.633 9.96 9.96 0 01-2.204 2.012A6.089 6.089 0 0012 19.875z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
