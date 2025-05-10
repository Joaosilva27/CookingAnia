import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import SyrnikiPicture from "../recipeImages/syrniki.jpg";
import TurkishHamSandwichPicture from "../recipeImages/turkish_ham_sandwich.jpg";
import PlackiZiemniaczanePicture from "../recipeImages/placki_ziemniaczane.jpg";
import McMuffinPicture from "../recipeImages/mc_muffin.JPG";
import AvocadoToastPicture from "../recipeImages/avocado_toast.JPG";

export default function SnacksPage() {
  const snackRecipes = [
    { title: "Syrniki", src: SyrnikiPicture, id: "syrniki" },
    { title: "Turkish Ham Sandwich", src: TurkishHamSandwichPicture, id: "turkish-ham-sandwich" },
    { title: "Placki Ziemniaczane", src: PlackiZiemniaczanePicture, id: "placki-ziemniaczane" },
    { title: "MC Muffin with Bacon", src: McMuffinPicture, id: "mc-muffin-with-bacon" },
    { title: "Avocado Toast with Egg", src: AvocadoToastPicture, id: "avocado-toast-with-egg" },
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
