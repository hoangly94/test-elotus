import MovieList from '@/partials/MovieList';
import React from 'react';
import styles from './styles.module.css';

const NowPlaying = () => {
  return (
    <div className={styles.home}>
      <MovieList type='nowPlaying'/>
    </div>
  );
};

export default NowPlaying;
