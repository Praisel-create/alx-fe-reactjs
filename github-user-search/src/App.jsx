import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";

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
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
