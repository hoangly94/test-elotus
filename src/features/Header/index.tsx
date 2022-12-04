import { UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import useCookie from 'react-use-cookie';
import Logo from './Logo';
import styles from './styles.module.css';

const Header = () => {
  const router = useRouter();
  const [getAccessToken, setAccessToken] = useCookie('access-token');

  const onClickLogout = ()=>{
    setAccessToken('');
    location.href = "/";
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={onClickLogout}>
          Logout
        </a>
      ),
    },
  ];


  return (
    <div className={styles.header}>
      <div className={styles.content} >
        <div className={styles.left}>
          <Logo />
          {/* <Menu /> */}
        </div>
        <div className={styles.right}>
          {/* <ThemeSwicher /> */}

      {/* <Dropdown menu={{ items }} placement="bottom">
        <div className={styles.avatar}>
          <UserOutlined />
        </div>
      </Dropdown> */}
        </div>
      </div>
    </div>
  )
}

export default Header