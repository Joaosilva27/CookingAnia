import React from "react";
import RecipeContainer from "../components/RecipeContainer";
import CheesecakePicture from "../recipeImages/cheesecake.jpg";
import MangoStickyRicePicture from "../recipeImages/mango_sticky_rice.jpg";
import BananaBreadPicture from "../recipeImages/banana_bread.jpg";

export default function DessertPage() {
  const dessertRecipes = [
    { title: "Basque Cheesecake", src: CheesecakePicture },
    { title: "Mango Sticky Rice", src: MangoStickyRicePicture },
    { title: "Banana Bread", src: BananaBreadPicture },
  ];

  return (
    <div className='pt-4 md:pl-15 md:pr-15'>
      <div className='flex flex-wrap justify-center'>
        {dessertRecipes.map((recipe, index) => (
          <RecipeContainer id={index} title={recipe.title} image={recipe.src} />
        ))}
      </div>
    </div>
  );
}
