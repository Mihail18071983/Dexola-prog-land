import React,  {useState, useEffect} from "react";
import styles from "TopNfts.module.scss";
import containerStyles from "../../Container.module.scss";
import { SectionTitle } from "../../shared/Title/SectionTitle";
import { getAll } from "../../shared/api/heroes";
import { GetHerousResponse } from "../../shared/api/heroes";

export const TopNfts = () => {
  const [heroes, setHeroes] = useState<GetHerousResponse>();

  useEffect(() => {
    const fetchData = async () => { 
    try {
      const data = await getAll();
      setHeroes(data);
    }
    catch (err) { 
      console.log(err);
    }
  }
    void fetchData();
  }, []);
  
  
  return (
    <section>
      <div className={containerStyles.container}>
        <SectionTitle part1="Top NFTs" part2="02" />
      </div>
    </section>
  );
};
