import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get recipeId from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  const handleDelete = () => {
    alert('Recipe deleted!');
    // You can redirect the user or perform other actions after deletion
  };

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm
          recipe={recipe}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton recipeId={recipe.id} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;