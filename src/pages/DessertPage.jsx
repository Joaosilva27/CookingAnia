import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import CheesecakePicture from "../recipeImages/cheesecake.jpg";

export default function DessertPage() {
  const dessertRecipes = [{ title: "Basque Cheesecake", src: CheesecakePicture }];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {dessertRecipes.map((recipe, index) => (
          <RecipeContainer id={index} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
