import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StartWorkout from './components/StartWorkout';
import DuringWorkout from './components/DuringWorkout';
import Profile from './components/Profile';
import Settings from './components/Settings';
import CreateSplit from './components/CreateSplit';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/start-workout" element={<StartWorkout />} />
        <Route path="/during-workout" element={<DuringWorkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-split" element={<CreateSplit />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
