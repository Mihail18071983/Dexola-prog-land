import React from 'react';
import { Features } from '../components/Features/Features';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { JoinUs } from '../components/JoinUs/JoinUs';
import { TopNfts } from '../components/TopNfts/TopNfts';

export const Main=()=> {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Features />
        <TopNfts />
        <JoinUs/> */}
      </main>
      {/* <Footer/> */}
    </>
  );
}

