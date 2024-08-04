import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [userRole, setUserRole] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setUserRole(role);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic

    // Redirect based on role
    if (userRole === 'farmer') {
      navigate('/farmer-profile');
    } else if (userRole === 'customer') {
      navigate('/customer-profile');
    }
  };

  return (
    <div className="flex justify-between items-center p-6 bg-white min-h-screen">
      <div className="w-1/2">
        <img src="src/assets/73fcb675e2a92cb12d6532141bfb7fc5.jpg" alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Login</h2>
        <div className="mb-4 flex flex-col space-y-2">
          <div className="bg-green-200 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleRoleChange('farmer')}>
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m0 0v-7m0 7h7m-7 0H5m7-9.25a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zM12 2v7m0 0v7m0 0h7m-7 0H5" />
              </svg>
              <span className="text-green-600">Login as Farmer</span>
            </div>
          </div>
          <div className="bg-orange-200 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleRoleChange('customer')}>
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m0 0v-7m0 7h7m-7 0H5m7-9.25a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zM12 2v7m0 0v7m0 0h7m-7 0H5" />
              </svg>
              <span className="text-orange-600">Login as Customer</span>
            </div>
          </div>
        </div>

        {userRole && (
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

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-green-600 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
