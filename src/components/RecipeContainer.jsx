export default function RecipeContainer({ title, image }) {
  return (
    <div className='p-3'>
      <div className='w-48 h-48 rounded-2xl shadow-lg bg-yellow-100 border-4 border-pink-200 overflow-hidden relative hover:scale-105 transition-transform duration-300'>
        <img src={image} alt={title} className='object-cover w-full h-full' />
        <div className='absolute bottom-0 w-full bg-pink-200 bg-opacity-80 text-center py-1'>
          <h3 className='text-sm font-bold text-pink-900 drop-shadow-sm'>{title}</h3>
        </div>
      </div>
    </div>
  );
}
