// function Login() {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 font-medium">Password</label>
//               <input
//                 type="password"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Password"
//               />
//             </div>
//             <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all">
//               Log In
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
  
//   export default Login;
  





import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate user data storage in localStorage
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe', email }));

    // Redirect to Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
