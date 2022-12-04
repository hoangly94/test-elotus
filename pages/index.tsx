import type { NextPage } from 'next'
import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Home from '@/features/Home';

const IndexPage: NextPage = () => {
  return (
    <Home/>
  )
}

export default IndexPage
