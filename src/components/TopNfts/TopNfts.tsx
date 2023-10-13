import React, { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "../../hooks/useAnimation";
import { animated } from "@react-spring/web";
import styles from "./TopNfts.module.scss";
import containerStyles from "../../Container.module.scss";
import { SectionTitle } from "../../shared/Title/SectionTitle";
import { Table } from "../Table/Table";
import { TableMobile } from "../Table/TableMobile";
import { IData } from "../../shared/api/heroes";


interface IProps  {
  isShown: boolean;
  items: IData[];
}

export const TopNfts = memo(({ isShown, items }: IProps) => {
  const [ntfsRef, ntfsInView] = useInView();
  const {props, api: ntfsApi} = useAnimation();
  useEffect(() => {
    if (ntfsInView) {
      ntfsApi.start({
        transform: "translateX(0)",
        scale: 1,
        delay: 500,
        config: {
          duration: 1000,
        },
      });
    } else {
      ntfsApi.start({ transform: "translateX(100%)", scale: 0 });
    }
  }, [ntfsApi, ntfsInView]);
  return (
    <section ref={ntfsRef} className={styles.topNfts}>
      <animated.div style={props}>
        <div className={containerStyles.container}>
          <SectionTitle part1="Top NFTs" part2="02" />
          {!isShown ? <Table items={items} /> : <TableMobile items={items} />}
        </div>
      </animated.div>
    </section>
  );
});
