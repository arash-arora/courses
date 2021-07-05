// import React from "react";

function Search({ searchField, setSearchField }) {
  function onChange(event) {
    setSearchField(event.target.value);
  }
  return (
    <div className='relative flex bg-white p-2 text-gray-300 rounded border-2 border-blue-300 w-4/3'>
      <svg
        className='h-5 w-5 absolute right-0 mr-2 '
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <input
        onChange={onChange}
        type='text'
        placeholder='Search..'
        className='text-black outline-none border-none ml-6 bg-transparent focus:border-none'></input>
    </div>
  );
}

export default Search;
