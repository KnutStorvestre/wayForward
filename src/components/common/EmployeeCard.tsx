import React from "react";
import styles from "../styles/EmployeeCard.module.css"; // Import CSS module
import { Employee } from "../../types"; // Import the Employee interface from types.ts

const EmployeeCard: React.FC<Employee> = ({
  image,
  name,
  position,
}: Employee) => {
  return (
    <div className={styles.employeeCard}>
      <img src={image.url} alt={image.alt} className={styles.employeeImage} />
      <div className={styles.employeeInfo}>
        <h3 className={styles.employeeName}>{name}</h3>
        <p className={styles.employeePosition}>{position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
