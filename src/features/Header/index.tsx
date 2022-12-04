import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Search from './Search';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content} >
        <div className={styles.left}>
          <Logo />
          <Menu />
        </div>
        <div className={styles.right}>
          <Search />
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}

export default Header