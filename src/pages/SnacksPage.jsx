import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import SyrnikiPicture from "../recipeImages/syrniki.jpg";
import TurkishHamSandwichPicture from "../recipeImages/turkish_ham_sandwich.jpg";
import PlackiZiemniaczanePicture from "../recipeImages/placki_ziemniaczane.jpg";

export default function SnacksPage() {
  const snackRecipes = [
    { title: "Syrniki", src: SyrnikiPicture },
    { title: "Turkish Ham Sandwich", src: TurkishHamSandwichPicture },
    { title: "Placki Ziemniaczane", src: PlackiZiemniaczanePicture },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {snackRecipes.map((recipe, index) => (
          <RecipeContainer id={index} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
