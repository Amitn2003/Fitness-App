// function Profile() {
//     const user = {
//       name: "John Doe",
//       email: "john@example.com",
//       height: "180 cm",
//       weight: "75 kg",
//       age: 25,
//     };
  
//     return (
//       <div className="p-8">
//         <h2 className="text-2xl mb-4">Profile</h2>
//         <div className="bg-white p-4 rounded shadow">
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Height:</strong> {user.height}</p>
//           <p><strong>Weight:</strong> {user.weight}</p>
//           <p><strong>Age:</strong> {user.age}</p>
//         </div>
//       </div>
//     );
//   }
  
//   export default Profile;
  


// import { useState, useEffect } from 'react';

// function Profile() {
//   const [userDetails, setUserDetails] = useState({
//     email: '',
//     height: '',
//     weight: '',
//     gender: '',
//     dob: '',
//     age: '',
//     activityLevel: '',
//   });

//   useEffect(() => {
//     // Fetch user data from localStorage
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUserDetails(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
//           <p><strong>Email:</strong> {userDetails.email}</p>
//           <p><strong>Gender:</strong> {userDetails.gender}</p>
//           <p><strong>Date of Birth:</strong> {userDetails.dob}</p>
//           <p><strong>Age:</strong> {userDetails.age}</p>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-2">Physical Information</h3>
//           <p><strong>Height:</strong> {userDetails.height} cm</p>
//           <p><strong>Weight:</strong> {userDetails.weight} kg</p>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-2">Activity Level</h3>
//           <p><strong>Activity Level:</strong> {userDetails.activityLevel} / 100</p>
//         </div>

//         {/* Optionally add a button to edit profile */}
//         <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all mt-6">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Profile;




import { useState, useEffect } from 'react';

function Profile() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    height: '',
    weight: '',
    gender: '',
    dob: '',
    age: '',
    activityLevel: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSaveProfile = () => {
    // Update user data in localStorage
    localStorage.setItem('user', JSON.stringify(userDetails));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        {!isEditing ? (
          <>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <p><strong>Email:</strong> {userDetails.email}</p>
              <p><strong>Gender:</strong> {userDetails.gender}</p>
              <p><strong>Date of Birth:</strong> {userDetails.dob}</p>
              <p><strong>Age:</strong> {userDetails.age}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Physical Information</h3>
              <p><strong>Height:</strong> {userDetails.height} cm</p>
              <p><strong>Weight:</strong> {userDetails.weight} kg</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Activity Level</h3>
              <p><strong>Activity Level:</strong> {userDetails.activityLevel} / 100</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all mt-6"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userDetails.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Height (cm)</label>
              <input
                type="number"
                name="height"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userDetails.height}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userDetails.weight}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Activity Level</label>
              <input
                type="range"
                name="activityLevel"
                min="0"
                max="100"
                value={userDetails.activityLevel}
                onChange={handleInputChange}
                className="w-full"
              />
              <p>Activity Level: {userDetails.activityLevel}</p>
            </div>

            <button
              onClick={handleSaveProfile}
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-all mt-6"
            >
              Save Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
