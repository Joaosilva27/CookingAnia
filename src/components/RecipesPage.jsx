import React, { useState } from "react";
import { useParams } from "react-router";
import { recipes } from "../recipesData";

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);
  const [currentImage, setCurrentImage] = useState(recipe?.image || "");

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className='flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto'>
      {/* left div */}
      <div className='md:w-1/2 flex flex-col items-center'>
        <img
          src={currentImage}
          alt={recipe.title}
          className='w-full max-w-md rounded-3xl border-4 border-pink-300 shadow-lg mb-4 transition-all duration-300'
        />
        <div className='flex flex-wrap gap-2 justify-center'>
          {/* must map through .image as well so the current img is not lost once another one is selected */}
          {[recipe.image, ...recipe.images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setCurrentImage(img)}
              className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                currentImage === img ? "border-pink-500" : "border-transparent"
              } hover:scale-105 transition`}
              alt={`Recipe thumbnail ${idx}`}
            />
          ))}
        </div>
      </div>

      {/* right div */}
      <div className='md:w-1/2 bg-pink-50 p-6 rounded-3xl shadow-xl border-2 border-pink-200'>
        <h1 className='text-4xl font-extrabold text-pink-600 mb-4'>{recipe.title}</h1>

        <h2 className='text-2xl font-semibold text-pink-500 mb-2'>Ingredients</h2>
        <ul className='list-disc list-inside mb-4 text-pink-800'>
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2 className='text-2xl font-semibold text-pink-500 mb-2'>Instructions</h2>
        <ol className='list-decimal list-inside text-pink-800 space-y-2'>
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
