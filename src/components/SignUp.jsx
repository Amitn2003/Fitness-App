// function SignUp() {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
//           <h2 className="text-2xl mb-4">Sign Up</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700">Name</label>
//               <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Password</label>
//               <input type="password" className="w-full p-2 border rounded" placeholder="Password" />
//             </div>
//             <button className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
  
//   export default SignUp;
  





import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    height: '',
    weight: '',
    gender: '',
    dob: '',
    activityLevel: 50,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUp = () => {
    // Calculate age based on DOB
    const birthDate = new Date(userData.dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();

    const dataToStore = {
      ...userData,
      age,
    };

    // Store in localStorage
    localStorage.setItem('user', JSON.stringify(dataToStore));

    // Redirect to Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Height (cm)</label>
            <input
              type="number"
              name="height"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.height}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.weight}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Gender</label>
            <select
              name="gender"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.gender}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userData.dob}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Activity Level</label>
            <input
              type="range"
              min="0"
              max="100"
              name="activityLevel"
              value={userData.activityLevel}
              onChange={handleInputChange}
              className="w-full"
            />
            <p className="text-gray-600">Activity Level: {userData.activityLevel}</p>
          </div>
          <button
            type="button"
            onClick={handleSignUp}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
