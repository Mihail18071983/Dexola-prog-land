import React from "react";
import { IData } from "../../shared/api/heroes";
import styles from "./Table.module.scss";

interface IProps {
  items: IData[];
}

export const Table = ({ items }: IProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.head}></th>
          <th className={styles.head}>NFT Name</th>
          <th className={styles.head}>Rarity Level</th>
          <th className={styles.head}>Total Games</th>
          <th className={styles.head}>Games Won</th>
          <th className={styles.head}>Price (ETH)</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: IData) => (
          <tr key={item.id}>
            <td>
              <img
                className={styles.avatar}
                src={item.avatar}
                alt={item.name}
              />
            </td>
            <td>{item.name}</td>
            <td>{item.level}</td>
            <td>{item.totalGames}</td>
            <td>{item.gamesWon}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
