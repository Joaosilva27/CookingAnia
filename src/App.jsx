import "./App.css";
import CookingMamaIcon from "./icons/cooking_mama.png";
import MealCategoryButton from "./components/MealCategoryButton";

const mealIcon = "/api/placeholder/64/64";
const soupIcon = "/api/placeholder/64/64";
const snackIcon = "/api/placeholder/64/64";
const dessertIcon = "/api/placeholder/64/64";

function App() {
  const mealCategories = [
    { id: 1, name: "Meals", icon: mealIcon },
    { id: 2, name: "Soups", icon: soupIcon },
    { id: 3, name: "Snacks", icon: snackIcon },
    { id: 4, name: "Desserts", icon: dessertIcon },
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
