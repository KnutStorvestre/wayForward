import "./styles/Rental.css";
import RentalCard from "./RentalCard";

const rentalData = [
  {
    activityTitle: "Leksehjelp 1",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Mandag 16:30 - 17:30",
    ageGroup: "1 - 4 klasse",
    description:
      "Ønsker du hjep med leksene dine eller hjelpe andre med lekser? Da er dette tilbudet for deg. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Leksehjelp 2",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Mandag 17:30 - 19:00",
    ageGroup: "5 - 7 klasse",
    description:
      "Ønsker du hjep med leksene dine eller hjelpe andre med lekser? Da er dette tilbudet for deg. Husk å ta med klær for utelek.",
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
              googleMapsLink={activity.googleMapsLink}
              street={activity.street}
              zipCode={activity.zipCode}
              description={activity.description}
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
      <h1 className="extra-bold-inter">Utleie</h1>
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
