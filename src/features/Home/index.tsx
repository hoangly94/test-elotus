import PopularMovies from '@/partials/PopularMovies';
import React from 'react';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <PopularMovies/>
    </div>
  );
};

export default Home;
