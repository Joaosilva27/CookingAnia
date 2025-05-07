import MisoSalmonPicture from "./recipeImages/salmon_miso.jpg";
import MisoSalmonPicture2 from "./recipeImages/miso_salmon_2.jpg";
import MisoSalmonPicture3 from "./recipeImages/miso_salmon_3.jpg";
import GarlicMirinChickenPicture from "./recipeImages/garlic_mirin_chicken.jpg";

export const recipes = [
  {
    id: "miso-salmon",
    title: "Miso Salmon",
    image: MisoSalmonPicture,
    images: [MisoSalmonPicture2, MisoSalmonPicture3],
    ingredients: ["1 salmon fillet", "2 tbsp miso paste", "1 tbsp mirin", "1 tsp soy sauce"],
    instructions: [
      "Preheat the oven to 200°C (390°F).",
      "Mix miso, mirin, and soy sauce in a bowl.",
      "Brush mixture onto salmon fillet.",
      "Bake for 15-18 minutes or until cooked through.",
    ],
  },
  {
    id: "garlic-mirin-chicken",
    title: "Garlic Mirin Chicken",
    image: GarlicMirinChickenPicture,
    ingredients: ["1 salmon fillet", "2 tbsp miso paste", "1 tbsp mirin", "1 tsp soy sauce"],
    instructions: [
      "Preheat the oven to 200°C (390°F).",
      "Mix miso, mirin, and soy sauce in a bowl.",
      "Brush mixture onto salmon fillet.",
      "Bake for 15-18 minutes or until cooked through.",
    ],
  },
];
