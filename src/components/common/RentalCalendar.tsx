import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { nb } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import styles from "../styles/CustomCalendar.module.css";
import axios from "axios"; // Import axios

const today = new Date();

const dateSixMonths = new Date();
dateSixMonths.setMonth(today.getMonth() + 6);

const dateSixMonthsMinusOne = new Date();
dateSixMonthsMinusOne.setMonth(today.getMonth() + 6);
dateSixMonthsMinusOne.setDate(dateSixMonthsMinusOne.getDate() - 1);

const hiddenDates = [{ after: dateSixMonthsMinusOne }];

const RentalCalendar = ({}) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [isCompactView, setIsCompactView] = useState(false);
  const [redDates, setRedDates] = useState<Date[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth <= 768); // Adjust the width as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchRedDates = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_JSONBIN_URL, {
          headers: {
            "X-Master-Key": import.meta.env.VITE_JSONBIN_X_MASTER_KEY, // Replace with your JSONBin API key
          },
        });
        const dates = response.data.record.redDates.map(
          (dateString: string | number | Date) => new Date(dateString)
        ); // Adjust according to your API response structure
        setRedDates(dates);
      } catch (error) {
        console.error("Error fetching red dates:", error);
      }
    };

    fetchRedDates();
  }, []);

  const modifiers = {
    greenDates: { after: today.getDate() + 1, before: dateSixMonths },
    redDates: redDates,
    previousDays: {
      before: today,
    },
  };

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

  return (
    <div className={styles.descriptionCalendarContainer}>
      <div className={styles.descriptionContainer}>
        <div className={styles.circleDescription}>
          <span className={styles.greenCircle}></span>
          <span>Ledig</span>
        </div>
        <div className={styles.circleDescription}>
          <span className={styles.redCircle}></span>
          <span>Opptatt</span>
        </div>
        <div className={styles.circleDescription}>
          <span className={styles.grayCircle}></span>
          <span>Utilgjengelig</span>
        </div>
      </div>
      <div className={styles.dayPickerContainer}>
        <DayPicker
          numberOfMonths={isCompactView ? 1 : 2}
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
