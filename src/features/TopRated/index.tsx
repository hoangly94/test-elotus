import MovieList from '@/partials/MovieList';
import React from 'react';
import styles from './styles.module.css';

const TopRated = () => {
  return (
    <div className={styles.home}>
      <MovieList type='topRated'/>
    </div>
  );
};

export default TopRated;
