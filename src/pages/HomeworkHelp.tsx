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
        <div className="text-container">
          <h1 className={styles.mainHeader}>Lekse hjelp</h1>
          <div className={styles.bodyText}>
            <p>
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, odio dolorum consequuntur laborum accusantium
                assumenda cupiditate tempora beatae magnam modi dolore
                asperiores, ducimus qui? Veniam expedita fuga obcaecati sequi
                sit.
              </strong>
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
    </div>
  );
};

export default HomeWorkHelp;
