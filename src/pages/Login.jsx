import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Mock function to simulate fetching user info
const fetchUserInfo = async (token) => {
  // Replace with actual API call
  // Example response
  return { role: 'farmer' }; // or 'customer'
};

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with actual login logic and token retrieval
    const token = 'mock-token'; // Example token

    // Simulate fetching user info
    const userInfo = await fetchUserInfo(token);

    // Redirect based on role
    if (userInfo.role === 'farmer') {
      navigate('/farmer-profile');
    } else if (userInfo.role === 'customer') {
      navigate('/customer-profile');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-100 p-6 flex items-center justify-center">
        <img src="src/assets/73fcb675e2a92cb12d6532141bfb7fc5.jpg" alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Social Media Login */}
          <div className="flex justify-around mb-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded">Login with Google</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Login with Facebook</button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded">Login with Yahoo</button>
          </div>

          {/* Login Form */}
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

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-orange-500"
          >
            Login
          </button>

          <p className="mt-4">
            Don't have an account? <Link to="/register" className="text-green-600 underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
