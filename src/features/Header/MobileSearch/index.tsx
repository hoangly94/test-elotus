import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useGetSearchMutation } from '@/store/movie/api';
import { useRouter } from 'next/router';
import _ from 'lodash';

const MobileSearch = () => {
  const [options, setOptions] = useState<Array<any>>([]);
  const [requestSearch, { isLoading }] = useGetSearchMutation();
  const router = useRouter();

  const onSearch = _.debounce((keyword: string) => {
      requestSearch(keyword).then(({ data }: any) => {
        const searchResult = data.results.map((movie: any) => ({ label: <a href={`/movie/${movie.id}`}>{movie.original_title}</a> }));
        setOptions(searchResult);
      })
  }, 500)

  return (
    <div className={styles.search}>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSearch={onSearch}
        placeholder="Search..."
      />
      <SearchOutlined />
    </div>
  )
}

export default MobileSearch