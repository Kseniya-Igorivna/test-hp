import { useState } from "react";
import WaterTracker from "../WaterRatioPanel/WaterRatioPanel";
import TodayWaterList from "../TodayWaterList/TodayWaterList";

const App = () => {
  const [sliderValue, setSliderValue] = useState(0);

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
      <TodayWaterList waterData={[{ date: "2024-12-16", percentage: sliderValue }]} />
    </div>
  );
};

export default App;