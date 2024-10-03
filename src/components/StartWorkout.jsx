function StartWorkout() {
    const exercises = [
      { name: "Push Up", sets: 3, reps: 12, weight: "Bodyweight" },
      { name: "Squat", sets: 4, reps: 10, weight: "50kg" },
    ];
  
    return (
      <div className="p-8">
        <h2 className="text-2xl mb-4">Start Workout</h2>
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index} className="mb-2">
              <div className="bg-gray-200 p-4 rounded">
                <h3>{exercise.name}</h3>
                <p>Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default StartWorkout;
  