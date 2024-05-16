import "./styles/AboutUs.css";
import EmployeeCard from "../components/common/EmployeeCard";
import GroupPhoto from "../assets/images/group-people.jpg";
import employees from "../data/EmployeesData";

const AboutUs = () => {
  return (
    <div>
      <div className="top-content-background">
        <div className="content">
          <h1 className="normal-header">Om oss</h1>
          <div className="center-text">
            <p className="about-us-text">
              Har du spørsmål eller ønsker å komme i kontakt med oss? Send oss
              en melding på e-post eller ring oss.
            </p>
            <p className="about-us-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem id
              saepe nihil! Voluptatum magnam eligendi aut quisquam iure, ea
              placeat eaque, aperiam optio sed non qui, nemo laborum doloribus
              exercitationem. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Animi temporibus harum suscipit quis, quia
              dolores odit dolorem architecto sint officiis fugit, qui nulla
              deserunt excepturi amet velit repellat fugiat. Illum ea id sequi,
              quaerat omnis repellat vitae suscipit exercitationem officiis!
              Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
              Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
              Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
              Quisquam, quos. Quisquam, quos.
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="group-photo">
          <img src={GroupPhoto} alt="placeholder" />
        </div>
        <div>
          <h1 className="normal-header">Ansatte/Frivilige</h1>
          <div className="employee-cards">
            {employees.map((employee, index) => (
              <EmployeeCard
                key={index}
                image={employee.image}
                name={employee.name}
                position={employee.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
