import "../styles/EmployeeCard.css"; // Make sure to import the CSS file
import { Employee } from "../../types"; // Import the Employee interface from types.ts

const EmployeeCard: React.FC<Employee> = ({
  image,
  name,
  position,
}: Employee) => {
  return (
    <div className="employee-card">
      <img src={image.url} alt={image.alt} className="employee-image" />
      <div className="employee-info">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-position">{position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
