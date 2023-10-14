import { PiMagnifyingGlass } from 'react-icons/pi';

const SearchElement = () => {
  return (
    <form className='flex'>
      <PiMagnifyingGlass size={20} />
      <input
        type='text'
        name='song-query'
        id='song-query'
        placeholder='What do you want to search for?'
        autoFocus
      />
    </form>
  );
};

export default SearchElement;
