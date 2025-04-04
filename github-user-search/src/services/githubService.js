import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUsers = async (username, location, minRepos, page = 1) => {
    try {
      let query = `q=${username}`;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>${minRepos}`;
      
  
      const response = await axios.get(`https://api.github.com/search/users?${query}&per_page=10&page=${page}`);
      return response.data;
    } catch (error) {
      console.error("GitHub API Error:", error);
      throw new Error("Failed to fetch users. Please check your search criteria and try again.");
    }
  };
  
