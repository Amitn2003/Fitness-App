import React, { useState } from 'react';

const ExerciseSelection = () => {
  const [workoutSplit, setWorkoutSplit] = useState('');
  const [day, setDay] = useState('');
  const [restPeriod, setRestPeriod] = useState(2); // Default rest period

  const exercises = {
    'Bro Split': {
      'Biceps Day': ['Bicep Curls', 'Hammer Curls', 'Concentration Curls'],
      'Chest Day': ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'],
      'Back Day': ['Pull-ups', 'Bent Over Rows', 'Lat Pulldowns'],
      'Leg Day': ['Squats', 'Leg Press', 'Lunges'],
      'Shoulder Day': ['Shoulder Press', 'Lateral Raises', 'Front Raises'],
    },
    'Upper Lower': {
      'Upper Body Day': ['Pull-ups', 'Push-ups', 'Shoulder Press'],
      'Lower Body Day': ['Squats', 'Deadlifts', 'Lunges'],
      'Upper Body Accessory Day': ['Dumbbell Rows', 'Tricep Dips', 'Chest Press'],
      'Lower Body Accessory Day': ['Leg Curls', 'Calf Raises', 'Glute Bridges'],
    },
    'PPL': {
      'Push Day': ['Bench Press', 'Shoulder Press', 'Tricep Dips'],
      'Pull Day': ['Deadlifts', 'Bent Over Rows', 'Pull-ups'],
      'Leg Day': ['Squats', 'Leg Press', 'Calf Raises'],
      'Core Day': ['Planks', 'Russian Twists', 'Leg Raises'],
    },
    'Full Body': {
      'Full Body Day': ['Squats', 'Deadlifts', 'Bench Press'],
      'Circuit Training Day': ['Burpees', 'Kettlebell Swings', 'Mountain Climbers'],
      'High-Intensity Interval Training Day': ['Jump Squats', 'Push-ups', 'Battle Ropes'],
    },
    'Warm Up': {
      'Warm Up Day': ['Jumping Jacks', 'Arm Circles', 'Leg Swings'],
      'Dynamic Warm Up': ['High Knees', 'Butt Kicks', 'Walking Lunges'],
    },
    'Stretching': {
      'Stretching Day': ['Hamstring Stretch', 'Quadriceps Stretch', 'Shoulder Stretch'],
      'Post-Workout Stretching': ['Child’s Pose', 'Cat-Cow Stretch', 'Pigeon Pose'],
      'Flexibility Routine': ['Seated Forward Bend', 'Butterfly Stretch', 'Standing Side Stretch'],
    },
    'Arnold Split': {
      'Chest Day': ['Bench Press', 'Dumbbell Fly', 'Push-ups'],
      'Leg Day': ['Squats', 'Leg Press', 'Calf Raises'],
      'Back Day': ['Deadlifts', 'Pull-ups', 'Seated Rows'],
      'Shoulder Day': ['Military Press', 'Arnold Press', 'Upright Rows'],
      'Arm Day': ['Bicep Curls', 'Tricep Extensions', 'Skull Crushers'],
    },
  };
  

  const handleWorkoutSplitChange = (e) => {
    setWorkoutSplit(e.target.value);
    setDay(''); // Reset day when workout split changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Workout:', { workoutSplit, day, restPeriod });
    // Redirect or display exercises based on user selection
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Choose Your Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Workout Split</label>
          <select
            value={workoutSplit}
            onChange={handleWorkoutSplitChange}
            className="border border-gray-300 rounded w-full px-3 py-2"
            required
          >
            <option value="">Select a Split</option>
            {Object.keys(exercises).map((split) => (
              <option key={split} value={split}>
                {split}
              </option>
            ))}
          </select>
        </div>

        {workoutSplit && (
          <div>
            <label className="block text-sm font-medium mb-1">Workout Day</label>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-300 rounded w-full px-3 py-2"
              required
            >
              <option value="">Select a Day</option>
              {Array.isArray(exercises[workoutSplit]) ? (
                exercises[workoutSplit].map((exercise) => (
                  <option key={exercise} value={exercise}>
                    {exercise}
                  </option>
                ))
              ) : (
                Object.keys(exercises[workoutSplit]).map((dayOption) => (
                  <option key={dayOption} value={dayOption}>
                    {dayOption}
                  </option>
                ))
              )}
            </select>
          </div>
        )}

        {day && (
          <div>
            <label className="block text-sm font-medium mb-1">Rest Period (minutes)</label>
            <input
              type="number"
              value={restPeriod}
              onChange={(e) => setRestPeriod(e.target.value)}
              min="2"
              max="5"
              className="border border-gray-300 rounded w-full px-3 py-2"
            />
          </div>
        )}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
          Start Workout
        </button>
      </form>

      {day && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold">Exercises for {day}:</h3>
          <ul className="list-disc ml-6">
            {exercises[workoutSplit][day].map((exercise) => (
              <li key={exercise}>{exercise}</li>
            ))}
          </ul>
          <p className="mt-2">Rest for {restPeriod} minutes between exercises.</p>
        </div>
      )}
    </div>
  );
};

export default ExerciseSelection;
