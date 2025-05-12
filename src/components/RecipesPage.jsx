import React, { useState } from "react";
import { useParams } from "react-router";
import { recipes } from "../recipesData";
import { GoogleGenAI } from "@google/genai";
import { prompt } from "../GeminiPrompt";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import FryingPanIcon from "../icons/frying_pan.png";

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);
  const [currentImage, setCurrentImage] = useState(recipe?.image || "");
  const [aiRecipeText, setAiRecipeText] = useState("");
  const aiRecipeTextLocalStorage = localStorage.getItem("ai_recipe");
  const [isRecipeBeingGenerated, setIsRecipeBeingGenerated] = useState(false);

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  if (!recipe) return <p>Recipe not found</p>;

  async function onGenerateRecipeData(recipeName) {
    setIsRecipeBeingGenerated(true);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: prompt + recipeName,
    });

    setAiRecipeText(response.text);
    setIsRecipeBeingGenerated(false);
    localStorage.setItem("ai_recipe", response.text); // adding this in case user refreshes the page
    console.log(response.text);
  }

  return (
    <div className='flex flex-col h-full md:flex-row gap-6 p-6 max-w-6xl mx-auto'>
      {/* left div */}
      <div className='md:w-1/2 flex flex-col items-center'>
        <div className='w-full max-w-md h-[400px] overflow-hidden mb-4 rounded-3xl border-4 border-pink-300 shadow-lg'>
          <img src={currentImage} alt={recipe.title} className='w-full h-full object-cover transition-all duration-300' />
        </div>

        {recipe.images && (
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
        )}
      </div>

      {/* right div */}
      <div className='md:w-1/2 bg-pink-50 p-6 rounded-3xl shadow-xl border-2 border-pink-200 h-full'>
        <h1 className='text-4xl font-extrabold text-pink-600 mb-4'>{recipe.title}</h1>

        {recipe.ingredients && recipe.instructions && (
          <div>
            <h2 className='text-2xl font-semibold text-pink-500 mb-2'>Ingredients</h2>
            <ul className='list-disc list-inside mb-4 text-pink-800'>
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className='text-2xl font-semibold text-pink-500 mb-2'>Instructions</h2>
            <ol className='list-decimal list-inside text-pink-800 space-y-2 mb-4'>
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {!recipe.ingredients && !recipe.instructions && (
          <div className='flex flex-col items-center mt-4 bg-[#FFE5B4] p-3 rounded-xl border-2 border-[#FFA500]'>
            <span className='text-[#FF6B6B] font-bold text-center mb-2 italic'>
              My lazy gf did not write this recipe, you can use AI to try to generate one for you.
            </span>
            <button
              onClick={() => onGenerateRecipeData(recipe.title)}
              disabled={isRecipeBeingGenerated ? true : false}
              className='bg-[#4ECDC4] text-white font-bold py-2 px-4 rounded-full 
              hover:bg-[#45B7AA] transition duration-300 
              active:scale-95 shadow-md'
            >
              {isRecipeBeingGenerated ? (
                <span className='flex justify-center items-center'>
                  Generating {recipe.title} recipe... <img src={FryingPanIcon} className='h-6 ml-1 animate-bounce' />
                </span>
              ) : aiRecipeText != "" ? (
                <span>Try generating a recipe again</span>
              ) : (
                <span>AI Recipe</span>
              )}
            </button>

            {aiRecipeText ? (
              <div className='flex flex-col items-center mt-4 bg-[#FFE5B4] p-3 rounded-xl border-2 border-[#FFA500]'>
                <ReactMarkdown
                  children={aiRecipeText ? aiRecipeText : aiRecipeTextLocalStorage}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => <i style={{ color: "green", fontSize: "1.3rem", marginBottom: "1rem" }} {...props} />,
                    h2: ({ node, ...props }) => <i style={{ color: "#e5007a", fontSize: "1.1rem" }} {...props} />,
                    p: ({ node, ...props }) => <i style={{ color: "green" }} {...props} />,
                  }}
                />
              </div>
            ) : (
              aiRecipeTextLocalStorage.includes(recipe.title) && (
                <div className='flex flex-col items-center mt-4 bg-[#FFE5B4] p-3 rounded-xl border-2 border-[#FFA500]'>
                  <ReactMarkdown
                    children={aiRecipeText ? aiRecipeText : aiRecipeTextLocalStorage}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => <i style={{ color: "green", fontSize: "1.3rem", marginBottom: "1rem" }} {...props} />,
                      h2: ({ node, ...props }) => <i style={{ color: "#e5007a", fontSize: "1.1rem" }} {...props} />,
                      p: ({ node, ...props }) => <i style={{ color: "green" }} {...props} />,
                    }}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
