import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { nb } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import styles from "../styles/CustomCalendar.module.css";

const today = new Date();

const dateSixMonths = new Date();
dateSixMonths.setMonth(today.getMonth() + 6);

const modifiers = {
  greenDates: { after: today.getDate() + 1, before: dateSixMonths },
  redDates: [
    new Date(2024, 6, 4), // July 4th, 2024
    new Date(2024, 6, 5), // July 5th, 2024
    new Date(2024, 6, 6), // July 6th, 2024
    new Date(2024, 6, 7), // July 7th, 2024
  ],
  previousDays: {
    before: today,
  },
};

const hiddenDates = [{ after: dateSixMonths }];

const modifiersStyles = {
  redDates: {
    backgroundColor: "#ffcccc", // Light red
    color: "#000000",
  },
  greenDates: {
    backgroundColor: "#ccffcc", // Light green
    color: "#000000",
  },
  previousDays: {
    backgroundColor: "#eeeeee",
    color: "#666666",
  },
};

const RentalCalendar = ({}) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  return (
    <div className={styles.descriptionCalendarContainer}>
      <div className={styles.descriptionContainer}>
        <p>
          Velg en dato for å se tilgjengelige tider. Røde datoer er ikke
          tilgjengelige.
        </p>
      </div>
      <div className={styles.dayPickerContainer}>
        <DayPicker
          fromDate={today}
          toDate={dateSixMonths}
          selected={selectedDay}
          onSelect={setSelectedDay}
          locale={nb}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          hidden={hiddenDates}
        />
      </div>
    </div>
  );
};

export default RentalCalendar;
