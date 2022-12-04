import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import { Menu as AntMenu } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const paths = router.asPath.split('/');

  const items = [
    {
      label: <a href="./">{t('home')}</a>,
      key: '',
    },
    {
      label: <a href="./now-playing">Now Playing</a>,
      key: 'now-playing',
    },
    {
      label: <a href="./top-rated">Top Rated</a>,
      key: 'top-rated',
    },
  ];

  return (
    <div className={styles.menu} >
      <AntMenu
        className={styles.antdMenu}
        selectedKeys={[paths?.[1]]}
        mode='horizontal'
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Menu;
