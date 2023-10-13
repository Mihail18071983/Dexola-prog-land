import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import { useSpring } from "@react-spring/web";
import { Features } from "../components/Features/Features";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { JoinUs } from "../components/JoinUs/JoinUs";
import { TopNfts } from "../components/TopNfts/TopNfts";
import { AddAnimation } from "../components/AddAnimation/AddAnimation";
import { useWindowSize } from "../hooks/useWindowsSize";
import { IData } from "../shared/api/heroes";
import { getAll } from "../shared/api/heroes";

export const Main: FC = () => {
  const [heroes, setHeroes] = useState<IData[]>([]);
  const headerRef = useRef<HTMLElement | null>(null);
  const joinUsRef = useRef<HTMLElement | null>(null);
  const [width] = useWindowSize();
  const [height, setHeight] = useState<number>(0);
  const [isShown, setIsShown] = useState(false);
  const [isFooterShown, setIsFooterShown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
 

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setHeight(headerHeight);
    }
    width > 743 ? setIsShown(false) : setIsShown(true);
    width > 743 && width < 1440
      ? setIsFooterShown(false)
      : setIsFooterShown(true);
  }, [width]);

  const [springCircles] = useSpring(() => ({
    from: { transform: "scale(0.1)", opacity: 1 },
    to: { transform: "scale(10)", opacity: 0 },
    config: { duration: 2000 },
    onStart: () => {
      setIsAnimating(true);
    },
    onRest: () => {
      setIsAnimating(false);
    },
  }));

  const scrollToJoinUs = () => {
    if (joinUsRef.current) {
      joinUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const data = await getAll();
      setHeroes(data!);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      <Header
        isAnimating={isAnimating}
        scrollToJoinUs={scrollToJoinUs}
        headerRef={headerRef}
      />
      <main style={{ marginTop: height }}>
        <Hero />
        <AddAnimation springValue={springCircles} isAnimating={isAnimating} />
        <Features />
        <TopNfts
          items={heroes}
          isShown={isShown}
        />
        <JoinUs
          joinUsRef={joinUsRef}
        />
      </main>
      <Footer isShown={isFooterShown} />
    </>
  );
};
