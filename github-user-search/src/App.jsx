import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserSearch from "./components/UserSearch";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white font-semibold">Home</Link>
            </li>
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<UserSearch />} />
            <Route path="/profile/:username" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
