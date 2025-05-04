import "./App.css";
import MealCategoryButton from "./components/MealCategoryButton";
import mealIcon from "./icons/steak.png";
import soupIcon from "./icons/ramen.png";
import snackIcon from "./icons/onigiri.png";
import dessertIcon from "./icons/cheesecake.png";
import smoothieIcon from "./icons/smoothie.png";
import Header from "./components/Header";

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
      <Header />
      <div className='flex flex-wrap justify-center'>
        {mealCategories.map(category => (
          <MealCategoryButton key={category.id} image={category.icon} text={category.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
