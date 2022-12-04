import React, { useContext } from 'react';
import styles from './styles.module.css'
import ThemeContext from 'src/contexts/Theme';
import Image from 'next/image';

const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <a href='/' className={styles.logo}>
      <img
        // src={theme === 'dark' ? '/avax-logo-dark.png' : '/avax-logo.png'}
        src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'}
        // src={'/images/logo.png'}
        width={124}
        // height={40}
        height={22}
      />
    </a>
  )
}

export default Logo