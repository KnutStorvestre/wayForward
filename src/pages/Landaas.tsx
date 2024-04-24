import ActivityCard from "./ActivityCard";
import "./pages.css";

export default function Landaas() {
  return (
    <div>
      <TopText />
      <div className="activity-cards">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
}

function TopText() {
  return (
    <div>
      <h1 className="extra-bold-inter">Landås aktiviteter</h1>
      <p className="semibold-inter">
        Ting endrer seg hele tiden. Husk å sjekk{" "}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        og{" "}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        .
      </p>
    </div>
  );
}
