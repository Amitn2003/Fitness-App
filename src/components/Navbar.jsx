import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around text-white">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/create-split">Create Split</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
