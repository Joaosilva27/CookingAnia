import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import MisoSalmonPicture from "../recipeImages/salmon_miso.jpg";
import GarlicMirinChickenPicture from "../recipeImages/garlic_mirin_chicken.jpg";
import BibimbapPicture from "../recipeImages/bibimbap.jpg";
import TurkishEggsPicture from "../recipeImages/turkish_boiled_eggs.jpg";
import StirFryUdonPicture from "../recipeImages/stir_fry_udon.jpg";
import AioliShrimpPicture from "../recipeImages/aioli_shrimp.jpg";
import HainaneseChickenPicture from "../recipeImages/hainanese_chicken_rice.jpg";
import FeijoadaPicture from "../recipeImages/feijoada.jpg";
import StirFryBeefRicePicture from "../recipeImages/stir_fry_beef_rice.jpg";
import PolishCabaggeRollsPicture from "../recipeImages/polish_cabagge_rolls.jpg";

export default function MealsPage() {
  const mealRecipes = [
    { title: "Miso Salmon", src: MisoSalmonPicture },
    { title: "Garlic Mirin Chicken", src: GarlicMirinChickenPicture },
    { title: "Bibimbap", src: BibimbapPicture },
    { title: "Turkish Soft Boiled Eggs", src: TurkishEggsPicture },
    { title: "Stir Fry Udon", src: StirFryUdonPicture },
    { title: "Aioli Shrimp with Fries", src: AioliShrimpPicture },
    { title: "Hainanese Chicken Rice", src: HainaneseChickenPicture },
    { title: "Feijoada Moda Anna", src: FeijoadaPicture },
    { title: "Stir Fry Beef with Rice", src: StirFryBeefRicePicture },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {mealRecipes.map((recipe, index) => (
          <RecipeContainer id={index} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
