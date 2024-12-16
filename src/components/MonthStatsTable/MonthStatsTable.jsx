import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MonthStatsTable.module.css";
import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats";

const MonthStatsTable = ({ stats, onDayClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString("default", { month: "long", year: "numeric" }));
  const [selectedDay, setSelectedDay] = useState(null);

  const now = new Date();
  const currentMonthYear = `${now.toLocaleString("default", { month: "long" })} ${now.getFullYear()}`;

  const handlePrevMonth = () => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() - 1);
    setCurrentMonth(date.toLocaleString("default", { month: "long", year: "numeric" }));
  };

  const handleNextMonth = () => {
    const date = new Date(currentMonth);
    if (currentMonthYear !== currentMonth) {
      date.setMonth(date.getMonth() + 1);
      setCurrentMonth(date.toLocaleString("default", { month: "long", year: "numeric" }));
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    onDayClick(day);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.arrow} onClick={handlePrevMonth}>{"<"}</button>
        <span className={styles.month}>{currentMonth}</span>
        {currentMonth !== currentMonthYear && (
          <button className={styles.arrow} onClick={handleNextMonth}>{">"}</button>
        )}
      </div>

      <div className={styles.days}>
        {stats.map((day) => (
          <div
            key={day.date}
            className={`${styles.day} ${day.fulfilled ? styles.fulfilled : styles.unfulfilled}`}
            onClick={() => handleDayClick(day)}
          >
            <span className={styles.date}>{day.date}</span>
            <span className={styles.percentage}>{day.percentage}%</span>
          </div>
        ))}
      </div>

      {selectedDay && <DaysGeneralStats day={selectedDay} />}
    </div>
  );
};

MonthStatsTable.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
      fulfilled: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDayClick: PropTypes.func.isRequired,
};

export default MonthStatsTable;