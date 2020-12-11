import React, { useState } from "react";
import "./styles.css";

const kolkataStreetFood = {
  SWEETS: {
    "1": "ROSHOGOLLA",
    "2": "SHONDESH",
    "3": "CHOMCHOM",
    "4": "MISHTI DOI",
    "5": "KALAKAND"
  },

  "VEGETARIAN SNACKS": {
    "1": "PHUCHKA",
    "2": "GHOOGNI",
    "3": "JHALMURI",
    "4": "KATHI ROLL",
    "5": "VEG CHOP"
  },

  "NON-VEGETARIAN SNACKS": {
    "1": "KOSHA MANGSHO",
    "2": "FISH KABIRAJI",
    "3": "MUTTON/CHICKEN/EGG ROLL",
    "4": "CHICKEN/MUTTON CHOP",
    "5": "FISH CUTLET"
  },

  "FISH CURRY": {
    "1": "MACHER JHOL",
    "2": "SHORSHEBATA ILISH MACH",
    "3": "PRAWNS MALAI CURRY",
    "4": "DOI KATLA",
    "5": "DAAB CHINGRI"
  }
};

const streetFoodTypes = Object.keys(kolkataStreetFood);

export default function App() {
  const [varities, setVarities] = useState("");

  const [info, setinfo] = useState(
    "KOLKATA STREET FOOD IS THE REASON WE SAY KOLKATA AS CITY OF JOY 😋 🍨"
  );

  const foodList = Object.values(varities);

  return (
    <div className="App">
      <h1>KNOW KOLKATA STREET FOOD</h1>
      <nav>
        {streetFoodTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              if (type in kolkataStreetFood) {
                const foods = kolkataStreetFood[type];
                setVarities(foods);
              }

              switch (type) {
                case "SWEETS":
                  setinfo("SYNONYM FOR KOLKATA IS SWEETS 😁");
                  break;
                case "VEGETARIAN SNACKS":
                  setinfo("YES, KOLKATA DO HAVE TASTY VEG FOODS TOO 😑");
                  break;
                case "NON-VEGETARIAN SNACKS":
                  setinfo("LET THE FUN BEGIN 😋");
                  break;
                case "FISH CURRY":
                  setinfo("ITS'S A CRIME TO NOT MENTION FISH SEPERATELY 😝");
                  break;
                default:
                  setinfo("");
              }
            }}
          >
            {type}
          </button>
        ))}
      </nav>
      <hr />

      <p>{info}</p>

      <ul>
        {foodList.map((food) => (
          <li key={food}>{food}</li>
        ))}
      </ul>
    </div>
  );
}
