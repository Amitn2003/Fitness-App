import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    height: '',
    weight: '',
    targetWeight: '',
    mainGoal: '',
    password: ''
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100; // height in cm
    const bmi = (formData.weight / (heightInMeters * heightInMeters)).toFixed(2);
    let status = '';

    if (bmi < 18.5) status = 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) status = 'Normal';
    else if (bmi >= 25 && bmi < 29.9) status = 'Overweight';
    else status = 'Obesity';

    return { bmi, status };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final submission (e.g., send data to the server)
    console.log(formData);
    localStorage.setItem('userData', JSON.stringify(formData));
    // Redirect to dashboard after successful registration
    // For example: history.push('/dashboard');
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register for FitZ</h2>
        <form onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                >
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              {formData.height && formData.weight && (
                <div className="mt-4">
                  <p>Your BMI: {calculateBMI().bmi} ({calculateBMI().status})</p>
                </div>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="targetWeight">Target Weight (kg)</label>
                <input
                  type="number"
                  id="targetWeight"
                  name="targetWeight"
                  value={formData.targetWeight}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Main Goal</label>
                <select
                  name="mainGoal"
                  value={formData.mainGoal}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                >
                  <option value="">Select...</option>
                  <option value="stayHealthy">Stay Healthy & Fit</option>
                  <option value="increaseMuscle">Increase Muscle</option>
                  <option value="burnFat">Burn Fat</option>
                  <option value="increaseStrength">Increase Strength</option>
                  <option value="increaseFlexibility">Increase Flexibility</option>
                </select>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full px-3 py-2"
                  required
                />
              </div>
            </>
          )}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button type="button" onClick={handlePrev} className="bg-gray-300 px-4 py-2 rounded">
                Back
              </button>
            )}
            <button type="button" onClick={step === 4 ? handleSubmit : handleNext} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
              {step === 4 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
