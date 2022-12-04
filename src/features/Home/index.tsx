import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from './styles.module.css';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.home}>
    </div>
  );
};

export default Home;
