import "./styles/AboutUs.css";
import EmployeeCard from "./components/EmployeeCard";
import GroupPhoto from "../assets/images/group-people.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="contact-text">
        <h1>Om oss</h1>
        <div className="center-text">
          <p>
            Har du spørsmål eller ønsker å komme i kontakt med oss? Send oss en
            melding på e-post eller ring oss.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem id
            saepe nihil! Voluptatum magnam eligendi aut quisquam iure, ea
            placeat eaque, aperiam optio sed non qui, nemo laborum doloribus
            exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Animi temporibus harum suscipit quis, quia dolores odit
            dolorem architecto sint officiis fugit, qui nulla deserunt excepturi
            amet velit repellat fugiat. Illum ea id sequi, quaerat omnis
            repellat vitae suscipit exercitationem officiis! Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos.
          </p>
        </div>
      </div>
      <div className="group-photo">
        <img src={GroupPhoto} alt="placeholder" />
      </div>
      <div>
        <h1>Ansatte/Frivilige</h1>
        <div className="employee-cards">
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
        </div>
        <div className="employee-cards">
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
          <EmployeeCard
            image="https://via.placeholder.com/150"
            name="Ola Nordmann"
            position="CEO"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
