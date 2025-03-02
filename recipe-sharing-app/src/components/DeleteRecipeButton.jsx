import React from 'react';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const { setRecipes } = useRecipeStore();

  const handleDelete = () => {
    // Remove the recipe from the store
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeId)
    );

    onDelete(); // Notify the parent component that the recipe was deleted
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;