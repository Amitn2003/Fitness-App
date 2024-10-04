// import { useState, useEffect } from 'react';

// function DuringWorkout() {
//   const [currentExercise, setCurrentExercise] = useState(0);
//   const [restTime, setRestTime] = useState(30); // Default 30 seconds rest
//   const [isResting, setIsResting] = useState(false);

//   const exercises = [
//     { name: "Push Up", sets: 3, reps: 12, weight: "Bodyweight" },
//     { name: "Squat", sets: 4, reps: 10, weight: "50kg" },
//   ];

//   // Timer logic for resting phase
//   useEffect(() => {
//     let timer;
//     if (isResting && restTime > 0) {
//       timer = setTimeout(() => setRestTime(restTime - 1), 1000);
//     } else if (restTime === 0) {
//       setIsResting(false);
//       setRestTime(30); // Reset rest time after resting
//       setCurrentExercise((prev) => (prev + 1) % exercises.length);
//     }
//     return () => clearTimeout(timer);
//   }, [restTime, isResting]);

//   const handleCompleteSet = () => {
//     setIsResting(true);
//   };

//   return (
//     <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Current Workout</h2>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         {!isResting ? (
//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">
//               {exercises[currentExercise].name}
//             </h3>
//             <p className="text-gray-600">Sets: {exercises[currentExercise].sets}</p>
//             <p className="text-gray-600">Reps: {exercises[currentExercise].reps}</p>
//             <p className="text-gray-600">Weight: {exercises[currentExercise].weight}</p>
//             <button
//               className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all"
//               onClick={handleCompleteSet}
//             >
//               Complete Set
//             </button>
//           </div>
//         ) : (
//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Resting...</h3>
//             <p className="text-gray-600">{restTime} seconds left</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DuringWorkout;






// import { useState } from 'react';

// function DuringWorkout() {
//   const [currentSet, setCurrentSet] = useState(1);
//   const [progress, setProgress] = useState({ setsCompleted: 0, repsCompleted: 0 });

//   const handleNextSet = () => {
//     if (currentSet < 3) {
//       setCurrentSet(currentSet + 1);
//     } else {
//       const newProgress = {
//         setsCompleted: progress.setsCompleted + 1,
//         repsCompleted: progress.repsCompleted + 10,
//       };
//       setProgress(newProgress);
//       // Store workout progress in localStorage
//       localStorage.setItem('workoutProgress', JSON.stringify(newProgress));
//       setCurrentSet(1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Workout Progress</h2>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <p className="text-xl mb-4 text-center">Current Set: {currentSet} of 3</p>
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-all"
//           onClick={handleNextSet}
//         >
//           Complete Set
//         </button>
//         <div className="mt-6 text-center">
//           <h3 className="text-lg font-semibold">Workout Stats</h3>
//           <p>Sets Completed: {progress.setsCompleted}</p>
//           <p>Reps Completed: {progress.repsCompleted}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DuringWorkout;















// const staticWorkout = {
//   name: 'Push Ups',
//   image: 'https://plus.unsplash.com/premium_photo-1667511316841-6a775f347479?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with a real image URL
//   targetMuscle: 'Chest, Triceps',
//   sets: 3,
//   repsRange: '8-12',
//   restTime: 30, // In seconds
// };


import React, { useState, useEffect } from 'react';


const staticWorkouts = [
  {
    name: 'Squats',
    image: 'https://plus.unsplash.com/premium_photo-1661906824628-3ac1f6c4ce1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Legs, Glutes',
    sets: 3,
    repsRange: '10-15',
    restTime: 30,
  },
  {
    name: 'Lunges',
    image: 'https://images.unsplash.com/photo-1650116385006-2a82a7b9941b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Legs, Glutes',
    sets: 3,
    repsRange: '8-12 each leg',
    restTime: 30,
  },
  {
    name: 'Plank',
    image: 'https://plus.unsplash.com/premium_photo-1672046218170-f709030b666a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Core',
    sets: 3,
    repsRange: '30-60 seconds',
    restTime: 30,
  },
  {
    name: 'Deadlifts',
    image: 'https://plus.unsplash.com/premium_photo-1664910033852-f1639b57cd9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Back, Legs',
    sets: 3,
    repsRange: '8-10',
    restTime: 60,
  },
  {
    name: 'Burpees',
    image: 'https://images.healthshots.com/healthshots/en/uploads/2023/03/16013822/Burpees-770x436.jpg',
    targetMuscle: 'Full Body',
    sets: 3,
    repsRange: '10-15',
    restTime: 30,
  },
  {
    name: 'Bicep Curls',
    image: 'https://images.unsplash.com/photo-1681040517791-aba993f05b2b?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Biceps',
    sets: 3,
    repsRange: '10-12',
    restTime: 30,
  },
  {
    name: 'Tricep Dips',
    image: 'https://images.pexels.com/photos/4803892/pexels-photo-4803892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    targetMuscle: 'Triceps',
    sets: 3,
    repsRange: '8-12',
    restTime: 30,
  },
  {
    name: 'Shoulder Press',
    image: 'https://images.pexels.com/photos/7289370/pexels-photo-7289370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    targetMuscle: 'Shoulders',
    sets: 3,
    repsRange: '8-10',
    restTime: 30,
  },
  {
    name: 'Mountain Climbers',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Core, Legs',
    sets: 3,
    repsRange: '15-20',
    restTime: 30,
  },
  {
    name: 'Jumping Jacks',
    image: 'https://images.pexels.com/photos/4853080/pexels-photo-4853080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    targetMuscle: 'Full Body',
    sets: 3,
    repsRange: '15-20',
    restTime: 30,
  },
  {
    name: 'Chest Press',
    image: 'https://images.pexels.com/photos/7289250/pexels-photo-7289250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    targetMuscle: 'Chest',
    sets: 3,
    repsRange: '8-10',
    restTime: 60,
  },
  {
    name: 'Leg Raises',
    image: 'https://images.pexels.com/photos/4803714/pexels-photo-4803714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    targetMuscle: 'Core',
    sets: 3,
    repsRange: '10-15',
    restTime: 30,
  },
  {
    name: 'Russian Twists',
    image: 'https://plus.unsplash.com/premium_photo-1627841817923-d032df9ef7b4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Core',
    sets: 3,
    repsRange: '15-20',
    restTime: 30,
  },
  {
    name: 'Seated Rows',
    image: 'https://plus.unsplash.com/premium_photo-1617871007512-38aaf658f826?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Back',
    sets: 3,
    repsRange: '10-12',
    restTime: 30,
  },
  {
    name: 'Hip Thrusts',
    image: 'https://plus.unsplash.com/premium_photo-1610544289626-6278d2bcbb4e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Glutes, Hamstrings',
    sets: 3,
    repsRange: '10-15',
    restTime: 30,
  },
  {
    name: 'Kettlebell Swings',
    image: 'https://plus.unsplash.com/premium_photo-1586208280187-2e58d8bcbe37?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Full Body',
    sets: 3,
    repsRange: '15-20',
    restTime: 30,
  },
  {
    name: 'Cable Tricep Pushdowns',
    image: 'https://plus.unsplash.com/premium_photo-1616994377089-2af018e2bbf9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Triceps',
    sets: 3,
    repsRange: '10-12',
    restTime: 30,
  },
  {
    name: 'Face Pulls',
    image: 'https://plus.unsplash.com/premium_photo-1621955892080-f7b7b224c62e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Shoulders, Upper Back',
    sets: 3,
    repsRange: '10-15',
    restTime: 30,
  },
  {
    name: 'Leg Press',
    image: 'https://plus.unsplash.com/premium_photo-1613502029790-62a4e32daba5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Legs',
    sets: 3,
    repsRange: '10-12',
    restTime: 60,
  },
  {
    name: 'Incline Bench Press',
    image: 'https://plus.unsplash.com/premium_photo-1564679904763-d18f8a07b36c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Chest, Shoulders',
    sets: 3,
    repsRange: '8-10',
    restTime: 60,
  },
  {
    name: 'Cable Rows',
    image: 'https://plus.unsplash.com/premium_photo-1623191629311-92d8499c36d5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Back',
    sets: 3,
    repsRange: '10-12',
    restTime: 30,
  },
  {
    name: 'Side Plank',
    image: 'https://plus.unsplash.com/premium_photo-1587781962495-57764393eac6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Core, Obliques',
    sets: 3,
    repsRange: '30-45 seconds each side',
    restTime: 30,
  },
  {
    name: 'Dumbbell Flyes',
    image: 'https://plus.unsplash.com/premium_photo-1603196949660-4f67c60c9d1b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Chest',
    sets: 3,
    repsRange: '10-12',
    restTime: 30,
  },
  {
    name: 'Box Jumps',
    image: 'https://plus.unsplash.com/premium_photo-1585700712920-e24c02d86d8c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Legs, Core',
    sets: 3,
    repsRange: '8-10',
    restTime: 30,
  },
  {
    name: 'Pike Push Ups',
    image: 'https://plus.unsplash.com/premium_photo-1599145307207-1ef1a48b0be8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    targetMuscle: 'Shoulders, Chest',
    sets: 3,
    repsRange: '6-10',
    restTime: 30,
  }
];


function DuringWorkout() {
  const [currentSet, setCurrentSet] = useState(1);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const [timer, setTimer] = useState(staticWorkouts[currentWorkoutIndex]?.restTime || 0);



  useEffect(() => {
    setTimer(staticWorkouts[currentWorkoutIndex]?.restTime);
  }, [currentWorkoutIndex]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleNextSet = () => {
    if (currentSet < staticWorkouts[currentWorkoutIndex]?.sets) {
      setCurrentSet(currentSet + 1);
      setTimer(staticWorkouts[currentWorkoutIndex]?.restTime); // Reset the rest timer after each set
    } else {
      alert('Set Completed! Ready for the next exercise.');
      setCurrentSet(1); // Reset to first set for the next exercise
      handleNextWorkout();
    }
  };

  const handleNextWorkout = () => {
    if (currentWorkoutIndex < staticWorkouts.length - 1) {
      setCurrentWorkoutIndex(currentWorkoutIndex + 1);
      setCurrentSet(1); // Reset sets for the next workout
    } else {
      alert('Workout complete!');
    }
  };

  const currentWorkout = staticWorkouts[currentWorkoutIndex];



//   const handleNextSet = () => {
//     if (currentSet < staticWorkout.sets) {
//       setCurrentSet(currentSet + 1);
//       setTimer(staticWorkout.restTime); // Reset the rest timer after each set
//     } else {
//       alert('Workout Completed!');
//     }
//   };


// function WorkoutDashboard() {
//   const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);

//   const handleNextWorkout = () => {
//     if (currentWorkoutIndex < staticWorkout.length - 1) {
//       setCurrentWorkoutIndex(currentWorkoutIndex + 1);
//     } else {
//       alert('Workout complete!');
//     }
//   };


//   const currentWorkout = staticWorkout[currentWorkoutIndex];

  // <div className="min-h-screen bg-gray-100 p-6">
  //   <h2 className="text-2xl font-bold text-center mb-6">During Workout</h2>
  //   <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
  //     <img
  //       src={staticWorkout.image}
  //       alt={staticWorkout.name}
  //       className="w-full h-40 object-cover rounded-lg mb-4"
  //     />
  //     <h3 className="text-xl font-bold mb-2">{staticWorkout.name}</h3>
  //     <p className="text-gray-700 mb-2">Target Muscle: {staticWorkout.targetMuscle}</p>
  //     <p className="text-gray-700 mb-2">Set: {currentSet} of {staticWorkout.sets}</p>
  //     <p className="text-gray-700 mb-4">Reps Range: {staticWorkout.repsRange}</p>
  //     <div className="text-center mb-4">
  //       <p className="text-lg font-semibold">Rest Time: {timer} sec</p>
  //     </div>
  //     <button
  //       onClick={handleNextSet}
  //       className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
  //     >
  //       {currentSet < staticWorkout.sets ? 'Next Set' : 'Complete Workout'}
  //     </button>
  //   </div>
  // </div>
  // <div className="min-h-screen p-6 bg-gray-100">
  //   <h2 className="text-3xl font-bold text-center mb-6">During Workout</h2>
    
  //   <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
  //     <div className="mb-6">
  //       <img
  //         src={currentWorkout.image}
  //         alt={currentWorkout.name}
  //         className="w-full h-48 object-cover rounded-lg"
  //       />
  //     </div>
      
  //     <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentWorkout.name}</h3>
  //     <p className="text-gray-600 mb-4"><strong>Target Muscle:</strong> {currentWorkout.targetMuscle}</p>
  //     <p className="text-gray-600 mb-4"><strong>Sets:</strong> {currentWorkout.sets}</p>
  //     <p className="text-gray-600 mb-4"><strong>Reps Range:</strong> {currentWorkout.repsRange}</p>
  //     <p className="text-gray-600 mb-4"><strong>Rest Time:</strong> {currentWorkout.restTime} seconds</p>

  //     <button
  //       className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all mt-6"
  //       onClick={handleNextWorkout}
  //     >
  //       {currentWorkoutIndex < staticWorkout.length - 1 ? 'Next Exercise' : 'Finish Workout'}
  //     </button>
  //   </div>
  // </div>
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">During Workout</h2>
      
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <img
            src={currentWorkout.image}
            alt={currentWorkout.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentWorkout.name}</h3>
        <p className="text-gray-600 mb-4"><strong>Target Muscle:</strong> {currentWorkout.targetMuscle}</p>
        <p className="text-gray-600 mb-4"><strong>Set:</strong> {currentSet} of {currentWorkout.sets}</p>
        <p className="text-gray-600 mb-4"><strong>Reps Range:</strong> {currentWorkout.repsRange}</p>
        <p className="text-gray-600 mb-4"><strong>Rest Time:</strong> {timer} seconds</p>

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all mt-6"
          onClick={handleNextSet}
        >
          {currentSet < currentWorkout.sets ? 'Next Set' : 'Next Exercise'}
        </button>
      </div>
    </div>
  );
}

export default DuringWorkout;
