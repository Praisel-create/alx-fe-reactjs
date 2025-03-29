import { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUsers(username, location, minRepos, 1);
      setUsers(data.items);
      setTotalResults(data.total_count);
      setPage(1);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchUsers(username, location, minRepos, nextPage);
      setUsers([...users, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Location (e.g. Nigeria)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Search</button>
      </form>

      {/* Loading & Error Messages */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Results Display */}
      <div className="mt-6">
        {users.length > 0 && (
          <p className="text-gray-700 mb-4">Showing {users.length} of {totalResults} users</p>
        )}

        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <p><a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a></p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Load More Button */}
        {users.length > 0 && users.length < totalResults && (
          <button onClick={loadMore} className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded-lg">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
