import useRecipeStore from "../store/useRecipeStore"

const RecipeList = () => {
    const recipes =useRecipeStore(state => state.recipes)
  return (
    <div>RecipeList</div>
  )
}

export default RecipeList