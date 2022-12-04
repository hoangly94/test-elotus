import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import ThemeContext from 'src/contexts/Theme';
import { Menu as AntMenu } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Menu = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const router = useRouter();
  const paths = router.asPath.split('/');

  const items = [
    {
      label: <a href="./">{t('home')}</a>,
      key: '',
    },
    {
      label: <a href="./trade">{t('trade')}</a>,
      key: 'trade',
    },
    {
      label: <a href="./analytic">{t('analytics')}</a>,
      key: 'analytic',
    },
    {
      label: <a href="./overview">{t('overview')}</a>,
      key: 'overview',
    },
    {
      label: <a href="./more">{t('more')}</a>,
      key: 'more',
    },
  ];

  return (
    <div className={styles.container} {...{ theme }}>
      <AntMenu
        className={styles.menu}
        selectedKeys={[paths?.[1]]}
        mode="horizontal"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Menu;
