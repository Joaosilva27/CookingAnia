import "./App.css";
import MealCategoryButton from "./components/MealCategoryButton";
import mealIcon from "./icons/steak.png";
import soupIcon from "./icons/ramen.png";
import snackIcon from "./icons/onigiri.png";
import dessertIcon from "./icons/cheesecake.png";
import smoothieIcon from "./icons/smoothie.png";

function App() {
  const mealCategories = [
    { id: 1, name: "Meals", icon: mealIcon, route: "meals" },
    { id: 2, name: "Soups", icon: soupIcon, route: "soups" },
    { id: 3, name: "Snacks", icon: snackIcon, route: "snacks" },
    { id: 4, name: "Desserts", icon: dessertIcon, route: "desserts" },
    { id: 5, name: "Smoothies", icon: smoothieIcon, route: "smoothies" },
  ];

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {mealCategories.map(category => (
          <MealCategoryButton key={category.id} image={category.icon} text={category.name} route={category.route} />
        ))}
      </div>
    </div>
  );
}

export default App;
