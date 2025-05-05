import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import MisoSalmonPicture from "../recipeImages/salmon_miso.jpg";

export default function MealsPage() {
  const mealRecipes = [
    { id: 1, title: "Test", src: MisoSalmonPicture },
    { id: 2, title: "Test", src: MisoSalmonPicture },
  ];

  return (
    <div className='flex'>
      {mealRecipes.map(recipe => (
        <RecipeContainer id={recipe.id} title={recipe.title} image={recipe.src} />
      ))}
    </div>
  );
}
