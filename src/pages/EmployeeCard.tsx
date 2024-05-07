import "./styles/EmployeeCard.css"; // Make sure to import the CSS file

interface EmployeeCardProps {
  image: string;
  name: string;
  position: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  image,
  name,
  position,
}) => {
  return (
    <div className="employee-card">
      <img src={image} alt={name} className="employee-image" />
      <div className="employee-info">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-position">{position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
