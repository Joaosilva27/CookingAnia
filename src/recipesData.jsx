// Meal images
import MisoSalmonPicture from "./recipeImages/salmon_miso.jpg";
import MisoSalmonPicture2 from "./recipeImages/miso_salmon_2.jpg";
import MisoSalmonPicture3 from "./recipeImages/miso_salmon_3.jpg";
import TeriyakiSalmonPicture from "./recipeImages/tariyaki_salmon.JPG";
import GarlicMirinChickenPicture from "./recipeImages/garlic_mirin_chicken.jpg";
import BibimbapPicture from "./recipeImages/bibimbap.jpg";
import StirFryUdonPicture from "./recipeImages/stir_fry_udon.jpg";
import StirFryUdonPicture2 from "./recipeImages/stir_fry_udon_2.JPG";
import AioliShrimpWithFriesPicture from "./recipeImages/aioli_shrimp.jpg";
import AioliShrimpWithFriesPicture2 from "./recipeImages/aioli_shrimp_2.jpg";
import HainaneseChickenPicture from "./recipeImages/hainanese_chicken_rice.jpg";
import HainaneseChickenPicture2 from "./recipeImages/hainanese_chicken_rice_2.JPG";
import HainaneseChickenPicture3 from "./recipeImages/hainanese_chicken_rice_3.PNG";
import HainaneseChickenPicture4 from "./recipeImages/hainanese_chicken_rice_4.PNG";
import HainaneseChickenPicture5 from "./recipeImages/hainanese_chicken_rice_5.PNG";
import HainaneseChickenPicture6 from "./recipeImages/hainanese_chicken_rice_6.PNG";
import FeijoadaPicture from "./recipeImages/feijoada.jpg";
import StirFryBeefRicePicture from "./recipeImages/stir_fry_beef_rice.jpg";
import PolishCabaggeRollsPicture from "./recipeImages/polish_cabagge_rolls.jpg";
import FishTacosPicture from "./recipeImages/fish_tacos.jpg";
import TunaBeansQuesadillaPicture from "./recipeImages/tuna_and_beans_quesadilla.jpg";
import KoreanColdNoodlesPicture from "./recipeImages/korean_cold_noodles.jpg";
import ChickenKatsuCurryPicture from "./recipeImages/chicken_katsu_curry.jpg";
import OvenRoastedSalmonPicture from "./recipeImages/oven_roasted_salmon.jpg";
import PokebowlPicture from "./recipeImages/pokebowl.jpg";
import PolishInspiredKatsuChickenPicture from "./recipeImages/polish_inspired_chicken_katsu.jpg";
import RedCurryChickenPicture from "./recipeImages/red_curry_chicken.jpg";
import EggPattiesWithFriesAndSaladPicture from "./recipeImages/egg_patties_fries_salad.jpg";
import HeartShapedPizzaPicture from "./recipeImages/pizza_heart.JPG";
import KoreanFriedChickenPicture from "./recipeImages/korean_fried_chicken.JPG";
import TeriyakiChickenStirFryRicePicture from "./recipeImages/teriyaki_chicken_stir_fry_rice.JPG";
import OvenRoastedChickenWithPotatoesPicture from "./recipeImages/oven_roasted_chicken_potatoes.JPG";
import ChickenWingsWithCouscousPicture from "./recipeImages/chicken_wings_with_cuscous.JPG";
import PastaBakePicture from "./recipeImages/pasta_bake.jpg";
import TurkishSoftBoiledEggsPicture from "./recipeImages/turkish_boiled_eggs.jpg";

// Soup images
import BeefUdonImage from "./recipeImages/beef_udon_soup.jpg";
import RamenPicture from "./recipeImages/ramen.jpg";

// Snack images
import McMuffinPicture from "./recipeImages/mc_muffin.JPG";
import McMuffinPicture2 from "./recipeImages/mc_muffin_2.JPG";
import AvocadoToastPicture from "./recipeImages/avocado_toast.JPG";
import AvocadoToastPicture2 from "./recipeImages/avocado_toast_2.JPG";
import AvocadoToastPicture3 from "./recipeImages/avocado_toast_3.JPG";
import SyrnikiPicture from "./recipeImages/syrniki.jpg";
import TurkishHamSandwichPicture from "./recipeImages/turkish_ham_sandwich.jpg";
import PlackiZiemniaczanePicture from "./recipeImages/placki_ziemniaczane.jpg";

// Desert images
import VeganCarrotCakePicture from "./recipeImages/vegan_carrot_cake.JPG";
import VeganCarrotCakePicture2 from "./recipeImages/vegan_carrot_cake_2.JPG";
import VeganCarrotCakePicture3 from "./recipeImages/vegan_carrot_cake_3.JPG";
import CheesecakePicture from "./recipeImages/cheesecake.jpg";
import MangoStickyRicePicture from "./recipeImages/mango_sticky_rice.jpg";
import BananaBreadPicture from "./recipeImages/banana_bread.jpg";

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
  },
  {
    id: "teriyaki-salmon",
    title: "Teriyaki Salmon",
    image: TeriyakiSalmonPicture,
  },
  {
    id: "mc-muffin-with-bacon",
    title: "MC Muffin with Bacon",
    image: McMuffinPicture,
    images: [McMuffinPicture2],
  },
  {
    id: "bibimbap",
    title: "Bibimbap",
    image: BibimbapPicture,
  },
  {
    id: "turkish-soft-boiled-eggs",
    title: "Turkish Soft Boiled Eggs",
    image: TurkishSoftBoiledEggsPicture,
  },
  {
    id: "stir-fry-udon",
    title: "Stir Fry Udon",
    image: StirFryUdonPicture,
    images: [StirFryUdonPicture2],
  },
  {
    id: "aioli-shrimp-with-fries",
    title: "Aioli Shrimp with Fries",
    image: AioliShrimpWithFriesPicture,
    images: [AioliShrimpWithFriesPicture2],
  },
  {
    id: "hainanese-chicken-rice",
    title: "Hainanese Chicken with Rice",
    image: HainaneseChickenPicture,
    images: [HainaneseChickenPicture2, HainaneseChickenPicture3, HainaneseChickenPicture4, HainaneseChickenPicture5, HainaneseChickenPicture6],
  },
  {
    id: "feijoada-moda-anna",
    title: "Feijoada Moda Anna",
    image: FeijoadaPicture,
  },
  {
    id: "stir-fry-beef-with-rice",
    title: "Stir Fry Beef with Rice",
    image: StirFryBeefRicePicture,
  },
  {
    id: "polish-cabagge-rolls",
    title: "Polish Cabagge Rolls",
    image: PolishCabaggeRollsPicture,
  },
  {
    id: "fish-tacos",
    title: "Fish Tacos",
    image: FishTacosPicture,
  },
  {
    id: "tuna-and-beans-quesadilla",
    title: "Tuna and Beans Quesadilla",
    image: TunaBeansQuesadillaPicture,
  },
  {
    id: "korean-cold-noodles",
    title: "Korean Cold Noodles",
    image: KoreanColdNoodlesPicture,
  },
  {
    id: "chicken-katsu-curry",
    title: "Chicken Katsu Curry",
    image: ChickenKatsuCurryPicture,
  },
  {
    id: "oven-roasted-salmon",
    title: "Oven Roasted Salmon",
    image: OvenRoastedSalmonPicture,
  },
  {
    id: "pokebowl",
    title: "Poké Bowl",
    image: PokebowlPicture,
  },
  {
    id: "polish-inspired-katsu-chicken",
    title: "Polish Inspired Katsu Chicken",
    image: PolishInspiredKatsuChickenPicture,
  },
  {
    id: "red-curry-chicken",
    title: "Red Curry Chicken",
    image: RedCurryChickenPicture,
  },
  {
    id: "egg-patties-with-fries-and-salad",
    title: "Egg Patties with Fries and Salad",
    image: EggPattiesWithFriesAndSaladPicture,
  },
  {
    id: "heart-shaped-pizza",
    title: "Heart-Shaped Pizza ❤️",
    image: HeartShapedPizzaPicture,
  },
  {
    id: "korean-fried-chicken",
    title: "Korean Fried Chicken",
    image: KoreanFriedChickenPicture,
  },
  {
    id: "korean-fried-chicken",
    title: "Korean Fried Chicken",
    image: KoreanFriedChickenPicture,
  },
  {
    id: "teriyaki-chicken-with-stir-fry-rice",
    title: "Teriyaki Chicken with Stir Fry Rice",
    image: TeriyakiChickenStirFryRicePicture,
  },
  {
    id: "oven-roasted-chicken-with-potatoes",
    title: "Oven Roasted Chicken with Potatoes",
    image: OvenRoastedChickenWithPotatoesPicture,
  },
  {
    id: "avocado-toast-with-egg",
    title: "Avocado Toast with Egg",
    image: AvocadoToastPicture,
    images: [AvocadoToastPicture2, AvocadoToastPicture3],
  },
  {
    id: "chicken-wings-with-couscous",
    title: "Chicken Wings with Couscous",
    image: ChickenWingsWithCouscousPicture,
  },
  {
    id: "pasta-bake",
    title: "Pasta Bake",
    image: PastaBakePicture,
  },
  {
    id: "vegan-carrot-cake",
    title: "Vegan Carrot Cake",
    image: VeganCarrotCakePicture,
    images: [VeganCarrotCakePicture2, VeganCarrotCakePicture3],
  },
  {
    id: "basque-cheesecake",
    title: "Basque Cheesecake",
    image: CheesecakePicture,
  },
  {
    id: "mango-sticky-rice",
    title: "Mango Sticky Rice",
    image: MangoStickyRicePicture,
  },
  {
    id: "banana-bread",
    title: "Banana Bread",
    image: BananaBreadPicture,
  },
  {
    id: "syrniki",
    title: "Syrniki",
    image: SyrnikiPicture,
  },
  {
    id: "turkish-ham-sandwich",
    title: "Turkish Ham Sandwich",
    image: TurkishHamSandwichPicture,
  },
  {
    id: "placki-ziemniaczane",
    title: "Placki Ziemniaczane",
    image: PlackiZiemniaczanePicture,
  },
  {
    id: "beef-udon",
    title: "Beef Udon",
    image: BeefUdonImage,
  },
  {
    id: "ramen",
    title: "Ramen",
    image: RamenPicture,
  },
];
