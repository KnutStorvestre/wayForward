import { ImageSlider } from "./components/ImageSlider";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car5 from "../assets/car-5.jpg";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const Building2 = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto",
        }}
      >
        <ImageSlider images={IMAGES} />
      </div>
    </div>
  );
};

export default Building2;
