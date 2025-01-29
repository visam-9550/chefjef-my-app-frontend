import { MyRecipesContainer, RecipesContainer } from "./styledComponents.jsx";

import React from 'react'
import MyRecipeItemDetails from "../MyRecipeItemDetails/MyRecipeItemDetails.jsx";
// import RecipeItem from "../RecipeItem/recipeItem.jsx";

import Header from '../Header/Header.jsx'

function MyRecipes() {
    

  return (
    <MyRecipesContainer>
      <Header />
      <RecipesContainer>
        
        <MyRecipeItemDetails />
             
      </RecipesContainer>
        
    </MyRecipesContainer>
  )
}

export default MyRecipes