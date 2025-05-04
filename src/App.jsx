import "./App.css";
import CookingMamaIcon from "./icons/cooking_mama.png";

function App() {
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl'>Cooking Ania</h1>
        <img src={CookingMamaIcon} className='h-20 ml-4' />
      </div>
    </div>
  );
}

export default App;
