import React,  { FC, useEffect, useRef, useState,  } from 'react';
import { Features } from '../components/Features/Features';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { JoinUs } from '../components/JoinUs/JoinUs';
import { TopNfts } from '../components/TopNfts/TopNfts';
import { useWindowDimensions } from '../hooks/useWindowsSize';

interface IProps {
headerHeight: number;
}

export const Main:FC<IProps> = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const { width } = useWindowDimensions();
  const [height, setHeight] = useState<number>(0);
 
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      console.log("Header Height:", headerHeight);
      setHeight(headerHeight)
    }
  }, [width]);

  return (
    <>
      <Header headerRef={headerRef} />
      <main style={{marginTop:height}}>
        <Hero />
        <Features />
        <TopNfts />
        {/* <JoinUs/> */}
      </main>
      {/* <Footer/> */}
    </>
  );
}

