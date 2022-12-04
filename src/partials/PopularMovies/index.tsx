import { useGetPopularMovieQuery } from '@/store/movie/api';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import FadeInImage from '../FadeInImage';
import styles from './styles.module.css';

const PopularMovies = () => {
  const { data, isLoading } = useGetPopularMovieQuery({});
  console.log(data);
  return (
    <div className={styles.popularMovies}>
      {
        isLoading
          ? <LoadingOutlined style={{ fontSize: '50px' }} />
          : data.results.map((movie: any) => (
            <a key={movie.id} className={styles.movie} href={`/movie/${movie.id}`}>
              <FadeInImage src={`${process.env.IMAGE_URL}${movie.poster_path}`} />
              <div className={styles.title}>{movie.original_title}</div>
              <div className={styles.date}>{movie.release_date}</div>
            </a>
          ))
      }
    </div>
  );
};

export default PopularMovies;
