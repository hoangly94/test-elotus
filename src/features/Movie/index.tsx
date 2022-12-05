import FadeInImage from '@/partials/FadeInImage';
import { useGetMovieQuery } from '@/store/movie/api';
import { LoadingOutlined } from '@ant-design/icons';
import { message, Skeleton } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useGetMovieQuery(id as string, { skip: !id });

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
      <div className={styles.movie}>
        {
          isLoading
            ? <div className={styles.content}>
              <Skeleton.Image active />
              <div>
                <Skeleton.Input className={styles.title} active />
                <Skeleton.Input className={styles.date} active />
                <Skeleton.Input className={styles.overview} active />
              </div>
            </div>
            :
            data && <div className={styles.content}>
              <div><FadeInImage src={`${process.env.IMAGE_URL}${data.poster_path}`} /></div>
              <div>
                <div className={styles.title}>{data.original_title}</div>
                <div className={styles.date}>{data.release_date}</div>
                <div className={styles.overview}>{data.overview}</div>
              </div>
            </div>
        }
      </div>
    </>
  );
};

export default Movie;
