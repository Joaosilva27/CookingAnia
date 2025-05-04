import "./App.css";
import CookingMamaIcon from "./icons/cooking_mama.png";
import MealCategoryButton from "./components/MealCategoryButton";
import mealIcon from "./icons/steak.png";
import soupIcon from "./icons/ramen.png";
import snackIcon from "./icons/onigiri.png";
import dessertIcon from "./icons/cheesecake.png";
import smoothieIcon from "./icons/smoothie.png";

function App() {
  const mealCategories = [
    { id: 1, name: "Meals", icon: mealIcon },
    { id: 2, name: "Soups", icon: soupIcon },
    { id: 3, name: "Snacks", icon: snackIcon },
    { id: 4, name: "Desserts", icon: dessertIcon },
    { id: 5, name: "Smoothies", icon: smoothieIcon },
  ];

  return (
    <div className='p-4 bg-yellow-50 min-h-screen'>
      <div className='flex justify-center items-center mb-8'>
        <h1 className='text-4xl font-bold text-pink-600'>Cooking Ania</h1>
        <img src={CookingMamaIcon} className='h-20 ml-4' alt='Cooking Ania Logo' />
      </div>

      <div className='flex flex-wrap justify-center'>
        {mealCategories.map(category => (
          <MealCategoryButton key={category.id} image={category.icon} text={category.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
