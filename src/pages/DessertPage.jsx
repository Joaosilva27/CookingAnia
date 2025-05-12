import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import CheesecakePicture from "../recipeImages/cheesecake.jpg";
import MangoStickyRicePicture from "../recipeImages/mango_sticky_rice.jpg";
import BananaBreadPicture from "../recipeImages/banana_bread.jpg";
import VeganCarrotCakePicture from "../recipeImages/vegan_carrot_cake.JPG";

export default function DessertPage() {
  const dessertRecipes = [
    { title: "Basque Cheesecake", src: CheesecakePicture, id: "basque-cheesecake" },
    { title: "Mango Sticky Rice", src: MangoStickyRicePicture, id: "mango-sticky-rice" },
    { title: "Banana Bread", src: BananaBreadPicture, id: "banana-bread" },
    { title: "Vegan Carrot Cake", src: VeganCarrotCakePicture, id: "vegan-carrot-cake" },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {dessertRecipes.map(recipe => (
          <RecipeContainer id={recipe.id} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
