import PropTypes from "prop-types";
import styles from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ day }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Day Statistics</h3>
      <p className={styles.detail}>
        <strong>Date:</strong> {day.date}
      </p>
      <p className={styles.detail}>
        <strong>Percentage:</strong> {day.percentage}%
      </p>
      <p className={styles.detail}>
        <strong>Status:</strong>{" "}
        {day.fulfilled ? (
          <span className={styles.fulfilled}>Fulfilled</span>
        ) : (
          <span className={styles.unfulfilled}>Unfulfilled</span>
        )}
      </p>
    </div>
  );
};

DaysGeneralStats.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    fulfilled: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DaysGeneralStats;