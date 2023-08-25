import React,  {useState, useEffect} from "react";
import styles from "./TopNfts.module.scss";
import containerStyles from "../../Container.module.scss";
import { SectionTitle } from "../../shared/Title/SectionTitle";
import { Table } from "../Table/Table";
import { TableMobile } from "../Table/TableMobile";
import { getAll } from "../../shared/api/heroes";
import { IData } from "../../shared/api/heroes";

import { useWindowDimensions } from "../../hooks/useWindowsSize";


export const TopNfts = () => {
  const [heroes, setHeroes] = useState<IData[]>([]);
  const [isShown, setIsShown] = useState(false);

  const { width } = useWindowDimensions();

   useEffect(() => {
    width > 743 ? setIsShown(false) : setIsShown(true);
  }, [width]);


  useEffect(() => {
    const fetchData = async () => { 
    try {
      const data = await getAll();
      setHeroes(data!);
    }
    catch (err) { 
      console.log(err);
    }
  }
    void fetchData();
  }, []);
  
  
  return (
    <section className={styles.section}>
      <div className={containerStyles.container}>
        <SectionTitle part1="Top NFTs" part2="02" />
        {!isShown ?(<Table items={heroes} />):
          <TableMobile items={heroes } />}
      </div>
    </section>
  );
};
