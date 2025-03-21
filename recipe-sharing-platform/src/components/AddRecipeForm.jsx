import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation: Ensure fields are not empty
    if (!recipe.title || !recipe.ingredients || !recipe.instructions || !recipe.image) {
      alert("All fields are required!");
      return;
    }

    let storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    
    const newRecipe = {
      id: storedRecipes.length + 1, // Generate unique ID
      title: recipe.title,
      image: recipe.image, // URL input
      ingredients: recipe.ingredients.split("\n"), // Convert to array
      instructions: recipe.instructions.split("\n"), // Convert to array
    };

    storedRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(storedRecipes));

    alert("Recipe added successfully!");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Submit a New Recipe</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold">Recipe Title:</label>
            <input type="text" name="title" value={recipe.title} onChange={handleChange} required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-semibold">Image URL:</label>
            <input type="url" name="image" value={recipe.image} onChange={handleChange} required
              placeholder="https://example.com/recipe.jpg"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold">Ingredients (One per line):</label>
            <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required
              rows="4" placeholder="1 cup flour&#10;2 eggs&#10;1 tsp sugar"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-semibold">Preparation Steps (One per line):</label>
            <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required
              rows="5" placeholder="1. Preheat oven to 180°C&#10;2. Mix ingredients&#10;3. Bake for 20 minutes"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
