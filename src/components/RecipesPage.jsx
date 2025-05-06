import React from "react";
import { useParams } from "react-router";
import { recipes } from "../recipesData";

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className='p-4 max-w-xl mx-auto'>
      <h1 className='text-3xl font-bold mb-2'>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className='rounded-xl mb-4' />
      <h2 className='text-xl font-semibold'>Ingredients</h2>
      <ul className='list-disc list-inside mb-4'>
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h2 className='text-xl font-semibold'>Instructions</h2>
      <ol className='list-decimal list-inside'>
        {recipe.instructions.map((step, idx) => (
          <li key={idx} className='mb-2'>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
