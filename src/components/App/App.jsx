import { useState, useEffect } from "react";
import axios from "axios";
import MonthStatsTable from "../MonthStatsTable/MonthStatsTable";
import TodayWaterList from "../TodayWaterList/TodayWaterList";
import WaterTracker from "../WaterTracker/WaterTracker";

const API_URL = ""; 

const App = () => {
  const [stats, setStats] = useState([]); 
  const [sliderValue, setSliderValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_URL, {
          params: { month: "2024-12" }, 
        });
        setStats(response.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load stats. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleDayClick = (day) => {
    console.log(`Day clicked: ${day.date}, Fulfilled: ${day.fulfilled}, Percentage: ${day.percentage}%`);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleAddWater = () => {
    setSliderValue((prev) => Math.min(prev + 10, 100)); 
  };

  return (
    <div>
            <WaterTracker
        sliderValue={sliderValue}
        onSliderChange={handleSliderChange}
        onAddWaterClick={handleAddWater}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : stats.length > 0 ? (
        <>
          <MonthStatsTable stats={stats} onDayClick={handleDayClick} />
          <TodayWaterList waterData={stats} />
        </>
      ) : (
        <p>No data available for this month.</p>
      )}
    </div>
  );
};

export default App;