import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import BeefUdonImage from "../recipeImages/beef_udon_soup.jpg";
import RamenPicture from "../recipeImages/ramen.jpg";

export default function SoupsPage() {
  const soupRecipes = [
    { title: "Beef Udon", src: BeefUdonImage, id: "beef-udon" },
    { title: "Ramen", src: RamenPicture, id: "ramen" },
  ];

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
