import { useGetMovieListQuery } from '@/store/movie/api';
import { AppstoreOutlined, LoadingOutlined, RedoOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import FadeInImage from '../FadeInImage';
import styles from './styles.module.css';

interface MovieListProps {
  type: string,
}

const MovieList = ({
  type
}: MovieListProps) => {
  const { data, isLoading, isError, refetch } = useGetMovieListQuery(type);
  const [isGrid, setIsGrid] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  const errorAlert = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  useEffect(() => {
    isError && errorAlert();
  }, [isError])

  return (
    <>
      {contextHolder}
      <div className={styles.actionButtons}>
        <RedoOutlined onClick={() => refetch()} />
        <div onClick={() => setIsGrid(!isGrid)}>
          {isGrid ? <AppstoreOutlined /> : <UnorderedListOutlined />}
        </div>
      </div>
      <div className={styles.MovieList} style={{ fontSize: '50px', whiteSpace: isGrid ? 'normal' : 'nowrap' }} >
        {
          isLoading
            ? <LoadingOutlined style={{ fontSize: '50px' }} />
            : data && data.results.map((movie: any) => (
              <a key={movie.id} className={styles.movie} href={`/movie/${movie.id}`}>
                <FadeInImage src={`${process.env.IMAGE_URL}${movie.poster_path}`} />
                <div className={styles.title}>{movie.original_title}</div>
                <div className={styles.date}>{movie.release_date}</div>
              </a>
            ))
        }
      </div>
    </>
  );
};

export default MovieList;
