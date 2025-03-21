import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const [errors, setErrors] = useState({}); // Stores validation errors

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!recipe.title.trim()) newErrors.title = "Recipe title is required.";
    if (!recipe.ingredients.trim()) newErrors.ingredients = "Ingredients cannot be empty.";
    if (!recipe.instructions.trim()) newErrors.instructions = "Preparation steps are required.";
    if (!recipe.image.trim()) newErrors.image = "Image URL is required.";
    else if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(recipe.image)) {
      newErrors.image = "Enter a valid image URL (jpg, jpeg, png, gif).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop submission if validation fails

    let storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const newRecipe = {
      id: storedRecipes.length + 1,
      title: recipe.title,
      image: recipe.image,
      ingredients: recipe.ingredients.split("\n"), // Convert to array
      instructions: recipe.instructions.split("\n"), // Convert to array
    };

    storedRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(storedRecipes));

    alert("Recipe added successfully!");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Submit a New Recipe</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold">Recipe Title:</label>
            <input type="text" name="title" value={recipe.title} onChange={handleChange}
              className={`w-full border p-2 rounded focus:outline-none ${errors.title ? "border-red-500" : "border-gray-300"}`} />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-semibold">Image URL:</label>
            <input type="url" name="image" value={recipe.image} onChange={handleChange}
              placeholder="https://example.com/recipe.jpg"
              className={`w-full border p-2 rounded focus:outline-none ${errors.image ? "border-red-500" : "border-gray-300"}`} />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold">Ingredients (One per line):</label>
            <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange}
              rows="4" placeholder="1 cup flour&#10;2 eggs&#10;1 tsp sugar"
              className={`w-full border p-2 rounded focus:outline-none ${errors.ingredients ? "border-red-500" : "border-gray-300"}`}></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-semibold">Preparation Steps (One per line):</label>
            <textarea name="instructions" value={recipe.instructions} onChange={handleChange}
              rows="5" placeholder="1. Preheat oven to 180°C&#10;2. Mix ingredients&#10;3. Bake for 20 minutes"
              className={`w-full border p-2 rounded focus:outline-none ${errors.instructions ? "border-red-500" : "border-gray-300"}`}></textarea>
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
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

export default AddRecipe;
