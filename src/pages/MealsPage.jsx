import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import MisoSalmonPicture from "../recipeImages/salmon_miso.jpg";
import TeriyakiSalmonPicture from "../recipeImages/tariyaki_salmon.JPG";
import GarlicMirinChickenPicture from "../recipeImages/garlic_mirin_chicken.jpg";
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
import PizzaHeartPicture from "../recipeImages/pizza_heart.JPG";
import KoreanFriedChickenPicture from "../recipeImages/korean_fried_chicken.JPG";
import TeriyakiChickenWithRicePicture from "../recipeImages/teriyaki_chicken_stir_fry_rice.JPG";
import OvenRoastedChickenWithPotatoesPicture from "../recipeImages/oven_roasted_chicken_potatoes.JPG";
import ChickenWingsWithCuscousPicture from "../recipeImages/chicken_wings_with_cuscous.JPG";
import PastaBakePicture from "../recipeImages/pasta_bake.jpg";

export default function MealsPage() {
  const mealRecipes = [
    { title: "Miso Salmon", src: MisoSalmonPicture, id: "miso-salmon" },
    { title: "Teriyaki Salmon", src: TeriyakiSalmonPicture, id: "teriyaki-salmon" },
    { title: "Garlic Mirin Chicken", src: GarlicMirinChickenPicture, id: "garlic-mirin-chicken" },
    { title: "Bibimbap", src: BibimbapPicture, id: "bibimbap" },
    { title: "Turkish Soft Boiled Eggs", src: TurkishEggsPicture, id: "turkish-soft-boiled-eggs" },
    { title: "Stir Fry Udon", src: StirFryUdonPicture, id: "stir-fry-udon" },
    { title: "Aioli Shrimp with Fries", src: AioliShrimpPicture, id: "aioli-shrimp-with-fries" },
    { title: "Hainanese Chicken Rice", src: HainaneseChickenPicture, id: "hainanese-chicken-rice" },
    { title: "Feijoada Moda Anna", src: FeijoadaPicture, id: "feijoada-moda-anna" },
    { title: "Stir Fry Beef with Rice", src: StirFryBeefRicePicture, id: "stir-fry-beef-with-rice" },
    { title: "Polish Cabagge Rolls", src: PolishCabaggeRollsPicture, id: "polish-cabagge-rolls" },
    { title: "Fish Tacos", src: FishTacosPicture, id: "fish-tacos" },
    { title: "Tuna and Beans Quesadilla", src: TunaBeanQuesadillaPicture, id: "tuna-and-beans-quesadilla" },
    { title: "Korean Cold Noodles", src: KoreanColdNoodlesPicture, id: "korean-cold-noodles" },
    { title: "Chicken Katsu Curry", src: ChickenKatsuCurryPicture, id: "chicken-katsu-curry" },
    { title: "Oven Roasted Salmon", src: OvenRoastedSalmonPicture, id: "oven-roasted-salmon" },
    { title: "Poké Bowl", src: PokeBowlPicture, id: "pokebowl" },
    { title: "Polish Inspired Katsu Chicken", src: PolishInspiredKatsuChickenPicture, id: "polish-inspired-katsu-chicken" },
    { title: "Red Curry Chicken", src: RedCurryChickenPicture, id: "red-curry-chicken" },
    { title: "Egg Patties with Fries and Salad", src: EggPattiesPicture, id: "egg-patties-with-fries-and-salad" },
    { title: "Heart-Shaped Pizza", src: PizzaHeartPicture, id: "heart-shaped-pizza" },
    { title: "Korean Fried Chicken", src: KoreanFriedChickenPicture, id: "korean-fried-chicken" },
    { title: "Teriyaki Chicken with Stir Fry Rice", src: TeriyakiChickenWithRicePicture, id: "teriyaki-chicken-with-stir-fry-rice" },
    { title: "Oven Roasted Chicken with Potatoes", src: OvenRoastedChickenWithPotatoesPicture, id: "oven-roasted-chicken-with-potatoes" },
    { title: "Chicken Wings with Couscous", src: ChickenWingsWithCuscousPicture, id: "chicken-wings-with-couscous" },
    { title: "Pasta Bake", src: PastaBakePicture, id: "pasta-bake" },
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
