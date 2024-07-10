import EmployeeCard from "../components/common/EmployeeCard";
import GroupPhoto from "../assets/about-us/group-people.jpg";
import employees from "../data/EmployeesData";
import styles from "./styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className="page-container padding-bottom-90">
      <section className="padding-top-7rem horizontal-padding">
        <div className="text-container">
          <h1 className={styles.mainHeader}>Om oss</h1>
          <p className={styles.mainParagraph}>
            Way Forward er en frivillig organisasjon som hovedsakelig jobber med
            å integrere og inkludere flerkulturelle barn og ungdom inn i det
            norske samfunnet med et ekstra fokus på at jenter skal delta i like
            stor grad som guttene. Organisasjonen ble startet av Richard
            Kiwanuka i 2004 og bruker nå leksehjelp, sykkelverksted,
            musikkstudio, jentegruppe og andre fritidsaktiviteter for å nå sine
            mål. Way Forward har et høyt fokus på å bygge opp et samfunn hvor
            alle har muligheten til å delta i sosiale aktiviteter uansett
            bakgrunn og økonomisk situasjon.
          </p>
          <p className={styles.mainParagraph}>
            I tillegg til å arrangere egne aktiviteter hjelper også Way Forward
            barn og unge inn i eksisterende idrettstilbud gjennom å kommunisere
            med idrettsklubber og hjelpe til økonomisk med kontingenter og
            innkjøp av idrettsutstyr. Tidligere har også organisasjonen
            arrangert dansekurs og svømmekurs. Gjennom årene har over 1200 barn
            og ungdom lært å svømme gjennom kursene.
          </p>
          <p className={styles.mainParagraph}>
            Richard Kiwanuka, leder av Way Forward, har mottatt flere priser
            gjennom årene. Prisene han har mottatt er{" "}
            <span className={styles.mainEmphasis}>
              Ildsjelprisen, Omsorgsprisen, Årets forbilde, Topp 10
              Internasjonal leder, Likestillingsprisen
            </span>{" "}
            og <span className={styles.mainEmphasis}>Barn av Jorden</span>. I
            2020 mottok Way Forward{" "}
            <span className={styles.mainEmphasis}>Vestlands Barrikadepris</span>{" "}
            fra Fri Vestland for arrangeringen av Black Lives Matter markeringen
            i Bergen.
          </p>
        </div>
      </section>

      <div className="max-width-container">
        <section className={styles.content}>
          <div className={styles.groupPhoto}>
            <img src={GroupPhoto} alt="En gruppe mennesker fra Way Forward" />
          </div>
          <div className="horizontal-padding">
            <header>
              <h1 className={styles.bottomHeader}>Ansatte/Frivillige</h1>
            </header>
            <div className={styles.employeeCards}>
              {employees.map((employee) => (
                <EmployeeCard
                  key={employee.name}
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
