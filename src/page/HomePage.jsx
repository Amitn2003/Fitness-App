import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Hero Section */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Achieve Your Fitness Goals with FitZ</h1>
        <p className="mt-2">Your all-in-one fitness tracker for students and professionals.</p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200 transition">
          <Link to="/dashboard">Get Started</Link>
        </button>
      </header>

      {/* Features Section */}
      <section id="features" className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">Track Your Workouts</h3>
            <p>Log your exercises easily and monitor your progress.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">Nutrition Insights</h3>
            <p>Get personalized insights to fuel your body correctly.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">Easy Warm-Up Exercises</h3>
            <p>Quick exercises to prepare your body for workouts.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">Community Support</h3>
            <p>Connect with fellow fitness enthusiasts for motivation and advice.</p>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-200 p-6 text-center">
        <h2 className="text-2xl font-semibold">Benefits of Using FitZ</h2>
        <div className="mt-4">
          <p className="font-bold">Stay Consistent:</p>
          <p>Develop healthy habits by tracking your workouts and nutrition daily.</p>
          <p className="font-bold mt-2">Personalized Experience:</p>
          <p>Receive workout plans tailored to your specific fitness goals.</p>
          <p className="font-bold mt-2">Community Support:</p>
          <p>Connect with like-minded individuals to share tips and stay motivated.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="p-6 text-center">
        <h2 className="text-2xl font-semibold">How FitZ Works</h2>
        <div className="mt-4">
          <p className="font-bold">1. Track Food and Workouts</p>
          <p>Use our barcode scanner and logging tools for easy tracking.</p>
          <p className="font-bold mt-2">2. Get Personalized Recommendations</p>
          <p>Receive tailored workout and nutrition plans based on your goals.</p>
          <p className="font-bold mt-2">3. Stay Motivated</p>
          <p>Join our community for challenges and support!</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-6 text-center">
        <h2 className="text-2xl font-semibold">What Our Users Say</h2>
        <div className="mt-4">
          <p className="italic">“FitZ helped me stay accountable and reach my goals!” - Alex S.</p>
          <p className="italic">“The nutrition insights are a game changer for me!” - Jamie R.</p>
          <p className="italic">“I love the easy logging feature, it keeps me on track!” - Sara M.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white p-6 text-center">
        <h2 className="text-2xl font-semibold">Ready to Transform Your Fitness Journey?</h2>
        <p className="mt-2">Join thousands of others who have achieved their fitness goals with FitZ.</p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200 transition">
          <Link to="/register">Sign Up Now</Link>
        </button>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-200 p-6 text-center">
        <h2 className="text-2xl font-semibold">About FitZ</h2>
        <p className="mt-2">At FitZ, we believe that fitness should be accessible and enjoyable for everyone. Our mission is to empower users with the tools and knowledge they need to succeed.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 FitZ. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#contact" className="hover:text-blue-400">Contact Us</a>
          <a href="#privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-400">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
