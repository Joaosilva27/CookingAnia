import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import MisoSalmonPicture from "../recipeImages/salmon_miso.jpg";
import GarlicMirinChickenPicture from "../recipeImages/garlic_mirin_chicken.jpg";
import RamenPicture from "../recipeImages/ramen.jpg";
import BibimbapPicture from "../recipeImages/bibimbap.jpg";
import TurkishEggsPicture from "../recipeImages/turkish_boiled_eggs.jpg";
import StirFryUdonPicture from "../recipeImages/stir_fry_udon.jpg";
import AioliShrimpPicture from "../recipeImages/aioli_shrimp.jpg";
import HainaneseChickenPicture from "../recipeImages/hainanese_chicken_rice.jpg";
import FeijoadaPicture from "../recipeImages/feijoada.jpg";
import StirFryBeefRicePicture from "../recipeImages/stir_fry_beef_rice.jpg";
import PolishCabaggeRollsPicture from "../recipeImages/polish_cabagge_rolls.jpg";
import FishTacosPicture from "../recipeImages/fish_tacos.jpg";
import KoreanColdNoodlesPicture from "../recipeImages/korean_cold_noodles.jpg";
import ChickenKatsuCurryPicture from "../recipeImages/chicken_katsu_curry.jpg";
import OvenRoastedSalmonPicture from "../recipeImages/oven_roasted_salmon.jpg";
import PokeBowlPicture from "../recipeImages/pokebowl.jpg";
import PolishInspiredKatsuChickenPicture from "../recipeImages/polish_inspired_chicken_katsu.jpg";
import RedCurryChickenPicture from "../recipeImages/red_curry_chicken.jpg";
import TunaBeanQuesadillaPicture from "../recipeImages/tuna_and_beans_quesadilla.jpg";
import EggPattiesPicture from "../recipeImages/egg_patties_fries_salad.jpg";

export default function MealsPage() {
  const mealRecipes = [
    { title: "Miso Salmon", src: MisoSalmonPicture, id: "miso-salmon" },
    { title: "Garlic Mirin Chicken", src: GarlicMirinChickenPicture },
    { title: "Ramen", src: RamenPicture },
    { title: "Bibimbap", src: BibimbapPicture },
    { title: "Turkish Soft Boiled Eggs", src: TurkishEggsPicture },
    { title: "Stir Fry Udon", src: StirFryUdonPicture },
    { title: "Aioli Shrimp with Fries", src: AioliShrimpPicture },
    { title: "Hainanese Chicken Rice", src: HainaneseChickenPicture },
    { title: "Feijoada Moda Anna", src: FeijoadaPicture },
    { title: "Stir Fry Beef with Rice", src: StirFryBeefRicePicture },
    { title: "Polish Cabagge Rolls", src: PolishCabaggeRollsPicture },
    { title: "Fish Tacos", src: FishTacosPicture },
    { title: "Tuna and Beans Quesadilla", src: TunaBeanQuesadillaPicture },
    { title: "Korean Cold Noodles", src: KoreanColdNoodlesPicture },
    { title: "Chicken Katsu Curry", src: ChickenKatsuCurryPicture },
    { title: "Oven Roasted Salmon", src: OvenRoastedSalmonPicture },
    { title: "Poké Bowl", src: PokeBowlPicture },
    { title: "Polish Inspired Katsu Chicken", src: PolishInspiredKatsuChickenPicture },
    { title: "Red Curry Chicken", src: RedCurryChickenPicture },
    { title: "Egg Patties with Fries and Salad", src: EggPattiesPicture },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {mealRecipes.map((recipe, index) => (
          <RecipeContainer id={recipe.id} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
