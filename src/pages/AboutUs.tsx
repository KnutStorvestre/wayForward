import "./styles/AboutUs.css";
import EmployeeCard from "../components/common/EmployeeCard";
import GroupPhoto from "../assets/images/group-people.jpg";
import employees from "../data/EmployeesData";

const AboutUs = () => {
  return (
    <div className="page-container">
      <section className="top-content-background">
        <div className="content">
          <header>
            <h1 className="main-header">Om oss</h1>
          </header>
          <article className="center-text">
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
            </p>
            <header>
              <h1 className="our-values-header">Våre verdier</h1>
            </header>
            <p className="about-us-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              inventore ut soluta ad unde odit, tempora obcaecati iure? Est,
              qui, repellat laborum maxime excepturi optio nobis quidem fuga
              eveniet molestiae error exercitationem vel autem nostrum debitis
              sit et. Corrupti ex pariatur facilis eius atque excepturi sequi
              similique provident dolor dolore!
            </p>
          </article>
        </div>
      </section>
      <section className="content">
        <div className="group-photo">
          <img src={GroupPhoto} alt="Group of people" />
        </div>
        <div>
          <header>
            <h1 className="bottom-header">Ansatte/Frivillige</h1>
          </header>
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
      </section>
    </div>
  );
};

export default AboutUs;
