import skywoods from "../assets/sky-woods.jpg";
import "./styles/Home.css";

export default function Home() {
  return (
    <div>
      <img className="main-img" src={skywoods} alt="Nature Climbing" />
      <h1>Home</h1>
    </div>
  );
}
