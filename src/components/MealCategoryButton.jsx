import React from "react";

const MealCategoryButton = ({ image, text }) => {
  return (
    <div className='flex flex-col items-center m-2'>
      <div className='w-24 h-24 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer bg-gradient-to-br from-pink-200 to-pink-100 border-2 border-pink-300'>
        <div className='w-full h-full flex items-center justify-center p-2'>
          <img src={image} alt={text} className='max-w-full max-h-full object-contain' />
        </div>
      </div>
      <p className='mt-2 text-center font-bold text-pink-700'>{text}</p>
    </div>
  );
};

export default MealCategoryButton;
