import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login to FitZ</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded w-full px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded w-full px-3 py-2"
              required
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-500 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
