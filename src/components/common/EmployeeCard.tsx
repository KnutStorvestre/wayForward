import React from "react";
import styles from "../styles/EmployeeCard.module.css"; // Import CSS module
import { Employee } from "../../types"; // Import the Employee interface from types.ts

const EmployeeCard: React.FC<Employee> = ({
  image,
  name,
  position,
}: Employee) => {
  return (
    <div className={styles.card}>
      <img src={image.url} alt={image.alt} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
