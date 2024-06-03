import styles from "./styles/HomeworkHelp.module.css";
import homeworkImg from "../assets/images/homework-books.jpg";

const HomeWorkHelp = () => {
  return (
    <div className="page-container padding-top-7rem">
      <div className="max-width-container">
        <img
          src={homeworkImg}
          alt="Large top image"
          className={styles.largeImage}
        />
        <div className="text-container horizontal-padding">
          <p className={styles.topText}>
            <span className={styles.mainHeader}>Leksehjelp,</span>
            <span className={styles.location}> Landås</span>
          </p>
          <div className={styles.bodyText}>
            <p className={styles.strongText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              odio dolorum consequuntur laborum accusantium assumenda cupiditate
              tempora beatae magnam modi dolore asperiores, ducimus qui? Veniam
              expedita fuga obcaecati sequi sit.
            </p>
            <p className={styles.lightText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              itaque accusamus autem nesciunt modi! Doloremque labore fuga quae
              a. Voluptatem ut architecto beatae obcaecati numquam! Quas laborum
              ab nulla cumque!
            </p>
            <p className={styles.lightText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              itaque accusamus autem nesciunt modi! Doloremque labore fuga quae
              a. Voluptatem ut architecto beatae obcaecati numquam! Quas laborum
              ab nulla cumque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro itaque accusamus autem nesciunt modi!
              Doloremque labore fuga quae a. Voluptatem ut architecto beatae
              obcaecati numquam! Quas laborum ab nulla cumque! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Id minima, doloremque
              laborum iure perferendis aliquid numquam sapiente explicabo
              accusantium atque eum voluptatum aperiam, exercitationem, quas
              error. Minima natus officia dolore?
            </p>
            <p className={styles.lightText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda culpa ab, exercitationem alias tenetur, tempore odio
              nostrum voluptates, esse atque inventore libero autem ea hic
              aliquid? Aperiam quis iusto blanditiis.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <InfoBoxHeader title="Info" />
        Aldersgruppe eks: 1.-4. klasse og møte tidspunkt
        <InfoBoxHeader title="Kart" />
      </div>
    </div>
  );
};

interface InfoBoxHeaderProps {
  title: string;
}

const InfoBoxHeader: React.FC<InfoBoxHeaderProps> = ({ title }) => (
  <div>
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
      <h1 className={styles.headerTitle}>{title}</h1>
      <hr className={styles.headerLine} />
    </div>
  </div>
);

export default HomeWorkHelp;
