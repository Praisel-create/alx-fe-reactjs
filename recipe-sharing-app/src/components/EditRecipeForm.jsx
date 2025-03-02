import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const { setRecipes } = useRecipeStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the recipe in the store
    setRecipes((prevRecipes) =>
      prevRecipes.map((r) =>
        r.id === recipe.id ? { ...r, title, description } : r
      )
    );

    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;