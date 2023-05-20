import React, { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function Gnb() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/search/${keyword}`);
  };

  const initKeyword = () => {
    setKeyword('');
  };

  return (
    <div className='flex  p-2 border-b border-b-gray-500'>
      <Link to='/' onClick={initKeyword} className='flex'>
        <BsYoutube className='text-red-500 text-3xl' />
        <h1 className='text-2xl font-bold ml-2'>MYTUBE</h1>
      </Link>

      <form
        className='m-auto w-2/4 flex justify-center'
        onSubmit={handleSubmit}
      >
        <input
          className='w-full bg-black p-1 border-none outline-none'
          type='text'
          value={keyword}
          placeholder='Search...'
          onChange={handleChange}
        />
        <button className='bg-gray-700 w-8 y-8 flex justify-center items-center'>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
