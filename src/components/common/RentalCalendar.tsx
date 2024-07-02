import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { nb } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import styles from "../styles/customCalendar.module.css";

const modifiers = {
  highlighted: new Date(2024, 6, 4), // July 4th, 2024
  selected: new Date(2024, 6, 5), // July 5th, 2024
};

const modifiersStyles = {
  highlighted: {
    backgroundColor: "#a6e4ff",
    color: "#000000",
  },
  selected: {
    backgroundColor: "#7accc8",
    color: "#000000",
  },
};

const RentalCalendar = ({}) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  return (
    <DayPicker
      className={styles.DayPicker}
      selected={selectedDay}
      onSelect={setSelectedDay}
      locale={nb}
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
    />
  );
};

export default RentalCalendar;

/*



 */
