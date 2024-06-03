import EmployeeCard from "../components/common/EmployeeCard";
import GroupPhoto from "../assets/images/group-people.jpg";
import employees from "../data/EmployeesData";
import styles from "./styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className="page-container">
      <section
        className={
          styles.topContentBackground + " padding-top-7rem horizontal-padding"
        }
      >
        <div>
          <div className="text-container">
            <header>
              <h1 className={styles.mainHeader}>Om oss</h1>
            </header>
            <article className={styles.centerText}>
              <p>
                Har du spørsmål eller ønsker å komme i kontakt med oss? Send oss
                en melding på e-post eller ring oss.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                id saepe nihil! Voluptatum magnam eligendi aut quisquam iure, ea
                placeat eaque, aperiam optio sed non qui, nemo laborum doloribus
                exercitationem. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Animi temporibus harum suscipit quis, quia
                dolores odit dolorem architecto sint officiis fugit, qui nulla
              </p>
              <header>
                <h1 className={styles.ourValuesHeader}>Våre verdier</h1>
              </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                inventore ut soluta ad unde odit, tempora obcaecati iure? Est,
                qui, repellat laborum maxime excepturi optio nobis quidem fuga
                eveniet molestiae error exercitationem vel autem nostrum debitis
                sit et. Corrupti ex pariatur facilis eius atque excepturi sequi
                similique provident dolor dolore!
              </p>
            </article>
          </div>
        </div>
      </section>
      <div className="max-width-container">
        <section className={styles.content}>
          <div className={styles.groupPhoto}>
            <img src={GroupPhoto} alt="Group of people" />
          </div>
          <div className="horizontal-padding">
            <header>
              <h1 className={styles.bottomHeader}>Ansatte/Frivillige</h1>
            </header>
            <div className={styles.employeeCards}>
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
    </div>
  );
};

export default AboutUs;
