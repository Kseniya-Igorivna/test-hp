import DailyNorma from "../DailyNorma/DailyNorma";
import WaterTracker from "../WaterRatioPanel/WaterRatioPanel";
import TodayWaterList from "../TodayWaterList/TodayWaterList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.dailyNormaSection}>
        <DailyNorma />
      </section>
      <section className={styles.waterTrackerSection}>
        <WaterTracker />
      </section>
      <section className={styles.todayWaterListSection}>
        <TodayWaterList />
      </section>
    </div>
  );
};

export default HomePage;