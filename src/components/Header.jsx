import React from "react";
import CookingMamaIcon from "../icons/cooking_mama.png";

export default function Header() {
  return (
    <div className='flex justify-center items-center mb-8'>
      <h1 className='text-4xl font-bold text-pink-600'>Cooking Ania</h1>
      <img src={CookingMamaIcon} className='h-20 ml-4' alt='Cooking Ania Logo' />
    </div>
  );
}
