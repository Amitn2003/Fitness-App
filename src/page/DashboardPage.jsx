import React from 'react';

const DashboardPage = () => {
  return (
    <>
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold hover:to-blue-600">Welcome to your Dashboard!</h1> 
      
      <a href="/select-exercise">Start your first exercise...</a>
      
    </div>
    </>
  );
};

export default DashboardPage;
