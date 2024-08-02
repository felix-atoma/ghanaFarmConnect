// SignUp.jsx
import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-lg mb-4"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
