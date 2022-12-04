import { useGetPopularMovieQuery } from '@/store/movie/api';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './styles.module.css';

const PopularMovies = () => {
  const { data, isLoading } = useGetPopularMovieQuery({});
  return (
    <div className={styles.popularMovies}>
      {
        isLoading
          ? <LoadingOutlined />
          : (
            <div className={styles.movieList}>
            </div>
          )
      }
    </div>
  );
};

export default PopularMovies;
