import React from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import styles from './Gnb.module.css';

export default function Gnb() {
  const IconClickHandler = () => {};

  return (
    <div className={styles.container}>
      <button className={styles.mainButton} onClick={IconClickHandler}>
        <BsYoutube className={styles.icon} />
        Mytube
      </button>

      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search...'
        />
        <button className={styles.searchButton}>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
