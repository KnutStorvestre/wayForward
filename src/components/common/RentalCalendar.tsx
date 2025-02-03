import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { nb } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import styles from "../styles/CustomCalendar.module.css";
import axios from "axios";

const today = new Date();

const dateSixMonths = new Date();
dateSixMonths.setMonth(today.getMonth() + 6);

const dateSixMonthsMinusOne = new Date();
dateSixMonthsMinusOne.setMonth(today.getMonth() + 6);
dateSixMonthsMinusOne.setDate(dateSixMonthsMinusOne.getDate() - 1);

const hiddenDates = [{ before: today, after: dateSixMonthsMinusOne }];

interface RentalCalendarProps {
  s3BucketLink: string;
}

const RentalCalendar: React.FC<RentalCalendarProps> = ({ s3BucketLink }) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [isCompactView, setIsCompactView] = useState(false);
  const [redDates, setRedDates] = useState<Date[]>([]);
  const [grayDates, setGrayDates] = useState<Date[]>([]);

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
        const response = await axios.get(
          `${s3BucketLink}?t=${new Date().getTime()}`
        );
        setRedDates(
          response.data.redDates.map(
            (dateString: string) => new Date(dateString)
          )
        );
        // Generate gray dates for Monday through Friday within the date range
        const generatedGrayDates: Date[] = [];
        let currentDate = new Date(today);

        while (currentDate <= dateSixMonthsMinusOne) {
          const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
          if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            // Monday to Friday
            generatedGrayDates.push(new Date(currentDate));
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }

        const grayDatesFromBucket: Date[] = response.data.grayDates.map(
          (dateString: string) => new Date(dateString)
        );

        setGrayDates(
          Array.from(
            new Set([
              ...generatedGrayDates.map((date) => date.toISOString()),
              ...grayDatesFromBucket.map((date) => date.toISOString()),
            ])
          ).map((dateString) => new Date(dateString))
        );
      } catch (error) {
        console.error("Error fetching red dates:", error);
      }
    };

    fetchRedDates();
  }, []);

  const modifiers = {
    greenDates: { after: today.getDate() + 1, before: dateSixMonths },
    redDates: redDates,
    grayDates: grayDates,
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
    grayDates: {
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
