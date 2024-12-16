import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import TodayWaterList from "../../components/TodayWaterList/TodayWaterList";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dailyNorma}>
        <DailyNorma />
      </div>
      <div className={styles.waterRatio}>
        <WaterRatioPanel />
      </div>
      <div className={styles.todayWaterList}>
        <TodayWaterList />
      </div>
      <div className={styles.monthStats}>
        <MonthStatsTable />
      </div>
    </div>
  );
};

export default HomePage;