import React from "react";
import { IData } from "../../shared/api/heroes";
import styles from "./Table.module.scss";

interface IProps {
  items: IData[];
}

export const TableMobile = ({ items }: IProps) => {
  return (
  <div className={styles.container}>
      <table className={styles.table}>
      <tbody>
        {items.map((item: IData) => (
          <tr key={item.id}>
            <td>
              {item.id}. {item.name}
            </td>
            <td>{item.price} ETH</td>
            <td>
              <img
                className={styles.avatar}
                src={item.avatar}
                alt={item.name}
              />
            </td>
            <td>Rarity</td>
            <td>{item.level}</td>
            <td>Total Games</td>
            <td>{item.totalGames}</td>
            <td>Games Won</td>
            <td>{item.gamesWon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    
  );
};
