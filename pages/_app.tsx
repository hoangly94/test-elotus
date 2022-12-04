import '../src/styles/globals.css'
import '../src/styles/variables.css'
import '../src/styles/antd.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react';
import { store } from '@/store';
import { Provider as ReduxProvider } from 'react-redux';
import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from 'next-i18next.config';
import Header from '@/features/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(false);
  useEffect(()=>{
    setState(true);
  }, [])
  return (
    <ReduxProvider store={store}>
      <Header/>
       <Component {...pageProps}/>
      {/* {state ? <Component {...pageProps} /> : <div></div>} */}
    </ReduxProvider>
  )
}

export default appWithTranslation(MyApp, { i18n: nextI18nextConfig });
