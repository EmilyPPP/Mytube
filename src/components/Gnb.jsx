import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

export default function Gnb() {
  const params = useParams();
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setKeyword(params.keyword || '');
  }, [params.keyword]);

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
    <header className='flex p-2 border-b border-gray-500 mb-4'>
      <Link to='/' onClick={initKeyword} className='flex items-center'>
        <BsYoutube className='text-brand text-3xl' />
        <h1 className='text-2xl font-bold ml-2'>MYTUBE</h1>
      </Link>

      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-3/4 bg-white dark:bg-black p-1 border-none outline-none text-black dark:text-gray-50'
          type='text'
          value={keyword}
          placeholder='Search...'
          onChange={handleChange}
        />
        <button className='bg-gray-200 dark:bg-gray-700 p-2'>
          <BsSearch className='fill-gray-700 dark:fill-gray-100' />
        </button>
      </form>
      <button className='' onClick={toggleDarkMode}>
        {darkMode ? <BsSunFill /> : <BsMoonFill className='fill-gray-700' />}
      </button>
    </header>
  );
}
