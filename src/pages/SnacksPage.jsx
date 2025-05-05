import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import SyrnikiPicture from "../recipeImages/syrniki.jpg";
import TurkishHamSandwichPicture from "../recipeImages/turkish_ham_sandwich.jpg";
import PlackiZiemniaczanePicture from "../recipeImages/placki_ziemniaczane.jpg";

export default function SnacksPage() {
  const snackRecipes = [
    { id: 1, title: "Syrniki", src: SyrnikiPicture },
    { id: 2, title: "Turkish Ham Sandwich", src: TurkishHamSandwichPicture },
    { id: 3, title: "Placki Ziemniaczane", src: PlackiZiemniaczanePicture },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {snackRecipes.map(recipe => (
          <RecipeContainer id={recipe.id} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
