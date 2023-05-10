import React from 'react';
import Gnb from '../../components/Gnb/Gnb';
import VideoList from '../../components/VideoList.jsx/VideoList';
import styles from './Main.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <Gnb />
      <VideoList />
    </main>
  );
}
