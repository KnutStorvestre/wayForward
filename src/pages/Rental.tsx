import "./styles/Rental.css";
import RentalCard from "./components/RentalCard";
import italyVilla from "../assets/Italy-house.jpg";
import modernHouse from "../assets/modern-house.jpg";

const rentalData = [
  {
    activityTitle: "Moderne hus i Bergen",
    image: modernHouse,
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    description:
      "Ønsker du å bo i et moderne hus i Bergen? Da er dette tilbudet for deg.",
    linkBuilding: "/utleie/bygg1",
  },
  {
    activityTitle: "Luksusvilla i Italia",
    image: italyVilla,
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    description:
      "Ønsker du å bo i en luksusvilla i Italia? Da er dette tilbudet for deg.",
    linkBuilding: "/utleie/bygg2",
  },
];

const Rental = () => {
  return (
    <div>
      <TopText />
      <div className="center-content">
        <div className="activity-cards">
          {rentalData.map((activity, index) => (
            <RentalCard
              key={index}
              activityTitle={activity.activityTitle}
              image={activity.image}
              googleMapsLink={activity.googleMapsLink}
              street={activity.street}
              zipCode={activity.zipCode}
              description={activity.description}
              linkBuilding={activity.linkBuilding}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function TopText() {
  return (
    <div className="top-text">
      <h1 className="extra-bold-inter">Utleie/Utlån av lokaler</h1>
      <p className="semibold-inter">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error,
        iste vel commodi possimus rem accusantium numquam consectetur magni id
        hic ullam blanditiis adipisci labore debitis voluptatem ab porro
        officiis consequatur. Tempore ipsum incidunt blanditiis molestias et
      </p>
    </div>
  );
}
/*https://www.google.com/maps/dir//Troldhaugvegen+65,+5232+Paradis/@60.3192674,5.3293567,190m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x463cf99177a78e9b:0x8511c1fd93c7c06!2m2!1d5.329447!2d60.319625?entry=ttu*/

export default Rental;
