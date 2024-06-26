import { useState, useEffect } from "react";

import skinny from "./images/skinny.png";
import normal from "./images/normal.png";
import overweight from "./images/overweight.png";
import obese from "./images/obese.png";

const App = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(170);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("normal");

  useEffect(() => {
    calculateBMI();
  }, [weight, height]);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      categorizeBMI(bmiValue);
    }
  };

  const categorizeBMI = (bmi) => {
    if (bmi < 18.5) {
      setBmiCategory("underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory("normal");
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory("overweight");
    } else if (bmi >= 30) {
      setBmiCategory("obese");
    }
  };

  const getImage = () => {
    switch (bmiCategory) {
      case "underweight":
        return skinny;
      case "normal":
        return normal;
      case "overweight":
        return overweight;
      case "obese":
        return obese;
      default:
        return null;
    }
  };

  return (
    <div className="m-10 bg-gray-100 h-screen rounded-lg p-10">
      <div className="flex p-2 rounded-lg bg-gray-100 ">
        <img src="./black-cat-icon.png" alt="bmi" className="w-10 h-10 md:ml-auto" />
        <div className="mt-1">
          <h1 className="text-2xl font-semibold tracking-wide mb-5">Healthierr</h1>
        </div>
      </div>
      <h1 className="text-2xl font-semibold md:mt-8">BMI Calculator</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:mt-4 ">
        <div className="bg-white shadow-xl p-4 rounded-lg flex flex-col justify-center">
          <label className="mb-8">
            Weight ({weight} kg):
            <input
              className="appearance-none w-full h-2 bg-gray-300 rounded-lg overflow-hidden mt-2"
              type="range"
              step="1"
              min="25"
              max="200"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              style={{ 
                background: `linear-gradient(to right, #4caf50 ${((weight - 25) / (200 - 25)) * 100}%, #ccc ${((weight - 25) / (200 - 25)) * 100}%)`
              }}
            />
          </label>
          <label>
            Height ({height} cm):
            <input
              className="appearance-none w-full h-2 bg-gray-300 rounded-lg overflow-hidden mt-2"
              type="range"
              step="1"
              min="50"
              max="250"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              style={{ 
                background: `linear-gradient(to right, #2196f3 ${((height - 50) / (250 - 50)) * 100}%, #ccc ${((height - 50) / (250 - 50)) * 100}%)`
              }}
            />
          </label>
        </div>
        <div className="bg-mota shadow-xl p-4 rounded-lg flex items-center justify-center">
          <img src={getImage()} alt={bmiCategory} className="w-32 h-60" />
        </div>
      </div>
      <div className="bg-white shadow-xl p-4 rounded-lg mt-4 text-center">
        <h2 className="text-2xl font-semibold">Your BMI: {bmi}</h2>
      </div>
    </div>
  );
};

export default App;
