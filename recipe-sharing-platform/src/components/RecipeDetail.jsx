import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams

const RecipeDetail = () => {
    const { id } = useParams(); // Get recipe ID from URL
    const [recipe, setRecipe] = useState(null); // Store only one recipe

    useEffect(() => {
        fetch("/src/data.json")
            .then((response) => response.json())
            .then((jsonData) => {
                const foundRecipe = jsonData.find((item) => item.id === parseInt(id)); // Find matching recipe
                setRecipe(foundRecipe);
            })
            .catch((error) => console.error("Error loading data:", error));
    }, [id]);

    if (!recipe) {
        return <h1>Recipe Not Found</h1>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="h-[200px] w-[200px] hover:shadow-lg" />
            <h2 className="sm:text-sm md:text-l lg:text-xl font-bold line leading-loose">Ingredients</h2>
            <ul className="list-disc list-inside leading-loose">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="sm:text-sm md:text-l lg:text-xl font-bold leading-loose">Instructions</h2>
            <ol className="list-disc list-inside leading-loose">
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;