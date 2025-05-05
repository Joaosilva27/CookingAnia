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

export default function MealsPage() {
  const mealRecipes = [
    { id: 1, title: "Miso Salmon", src: MisoSalmonPicture },
    { id: 2, title: "Garlic Mirin Chicken", src: GarlicMirinChickenPicture },
    { id: 3, title: "Bibimbap", src: BibimbapPicture },
    { id: 4, title: "Turkish Soft Boiled Eggs", src: TurkishEggsPicture },
    { id: 5, title: "Stir Fry Udon", src: StirFryUdonPicture },
    { id: 6, title: "Aioli Shrimp with Fries", src: AioliShrimpPicture },
    { id: 7, title: "Hainanese Chicken Rice", src: HainaneseChickenPicture },
    { id: 8, title: "Feijoada Moda Anna", src: FeijoadaPicture },
    { id: 9, title: "Stir Fry Beef with Rice", src: StirFryBeefRicePicture },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {mealRecipes.map(recipe => (
          <RecipeContainer id={recipe.id} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
