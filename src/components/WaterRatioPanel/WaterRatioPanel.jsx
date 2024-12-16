import styles from "./WaterRatioPanel.css";
import frameImage from "../../images/Frame.svg";
import PropTypes from "prop-types";
import DailyNorma from "../DailyNorma/DailyNorma";

const WaterTracker = ({ sliderValue, onAddWaterClick }) => {
  return (
    <div>
      <DailyNorma />
      <div className={styles.dailyNormaSection}>
        <div className={styles.imageContainer}>
          <img
            src={frameImage}
            alt="Water Bottle"
            className={styles.waterBottle}
          />
        </div>

        <div className={styles.progressContainer}>
          <span className={styles.progressTitle}>Today</span>
          <svg
            className={styles.progressBar}
            width="256" 
            height="14"
            viewBox="0 0 256 14"
          >
            <use xlinkHref="#icon-ellipse" />
            <rect
              x="0"
              y="6"
              width="256"
              height="0"
              fill="#d3d3d3"
            />
            <rect
              x="0"
              y="0"
              width={(sliderValue / 100) * 256} 
              height="12"
              fill="#9ebbff"
            />
            <circle
              cx={(sliderValue / 100) * 256}
              cy="7"
              r="9"
              fill="#ffffff"
              stroke="#407bff"
              strokeWidth="1px"
            />
          </svg>
        </div>

        <div className={styles.progressLabels}>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>

        <button className={styles.addWaterBtn} onClick={onAddWaterClick}>
        <span className={styles.plusIcon}>+</span>
          Add Water
        </button>
      </div>
    </div>
  );
};

WaterTracker.propTypes = {
  sliderValue: PropTypes.number.isRequired,
  onAddWaterClick: PropTypes.func.isRequired,
};

export default WaterTracker;