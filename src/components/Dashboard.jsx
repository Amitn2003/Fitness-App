// function Dashboard() {
//     const user = {
//       name: "John Doe",
//       bmi: 23.5,
//       target: "Gain Muscle",
//       calories: 2500,
//       workouts: 10,
//       consistency: "85%",
//     };
  
//     return (
//       <div className="p-8">
//         <h2 className="text-3xl mb-4">Dashboard</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl">Welcome, {user.name}</h3>
//             <p>BMI: {user.bmi}</p>
//             <p>Target: {user.target}</p>
//             <p>Daily Calories: {user.calories}</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-xl">Workout Stats</h3>
//             <p>Workouts Completed: {user.workouts}</p>
//             <p>Consistency: {user.consistency}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Dashboard;
  





import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState({});
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const startWorkout = () => {
    setWorkoutStarted(true);
    // Store workout progress in localStorage for persistence
    localStorage.setItem('workoutProgress', JSON.stringify({ setsCompleted: 0 }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <p className="text-gray-600 mb-4">Email: {user.email}</p>

      {!workoutStarted ? (
        <button
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
          onClick={startWorkout}
        >
          Start Workout
        </button>
      ) : (
        <div>
          <p className="text-xl mb-2">Workout in Progress...</p>
          <button
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg"
            onClick={() => navigate('/during-workout')}
          >
            Go to Workout Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
