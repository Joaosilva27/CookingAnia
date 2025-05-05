import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import BeefUdonImage from "../recipeImages/beef_udon_soup.jpg";

export default function SoupsPage() {
  const soupRecipes = [{ id: 1, title: "Beef Udon", src: BeefUdonImage }];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {soupRecipes.map(recipe => (
          <RecipeContainer id={recipe.id} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
