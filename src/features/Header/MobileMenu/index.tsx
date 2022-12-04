import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import { Drawer, DrawerProps, Menu as AntMenu } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { AlignRightOutlined } from '@ant-design/icons';
import MobileSearch from '../MobileSearch';

const MobileMenu = () => {
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

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  return (
    <div className={styles.mobileMenu} >
      <AlignRightOutlined onClick={() => setOpen(true)} />
      <Drawer
        title="THEMOVIEDB"
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
      >
        <AntMenu
          className={styles.antdMenu}
          selectedKeys={[paths?.[1]]}
          mode="vertical"
          theme="dark"
          items={items}
        />
        <MobileSearch />
      </Drawer>
    </div>
  );
};

export default MobileMenu;
