import FadeInImage from '@/partials/FadeInImage';
import { useGetMovieQuery } from '@/store/movie/api';
import { LoadingOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useGetMovieQuery(id as string);

  const [messageApi, contextHolder] = message.useMessage();

  const errorAlert = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  useEffect(()=>{
    error && errorAlert();
  },[error])

  return (
    <>
      {contextHolder}
      <div className={styles.movie}>
        {
          isLoading
            ? <LoadingOutlined style={{ fontSize: '50px' }} />
            :
            data && <div className={styles.content}>
              <FadeInImage src={`${process.env.IMAGE_URL}${data.poster_path}`} />
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
