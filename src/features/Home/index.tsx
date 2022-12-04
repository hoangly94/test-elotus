import MovieList from '@/partials/MovieList';
import React from 'react';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <MovieList type='popular'/>
    </div>
  );
};

export default Home;
