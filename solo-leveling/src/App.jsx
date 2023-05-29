import React, { useState, useEffect } from "react";

import "./style/CharacterDetails.css";
import "./style/WorkoutPlan.css";
import WorkoutPlan from "./components/WorkoutPlan.jsx";
const App = () => {
  const [character, setCharacter] = useState({
    name: "Sung Jin Woo",
    level: 1,
    experience: 0,
  });

  useEffect(() => {
    // Load character data from localStorage on component mount
    const storedCharacter = localStorage.getItem("character");
    if (storedCharacter) {
      setCharacter(JSON.parse(storedCharacter));
    }
  }, []);

  const updateCharacter = (updatedCharacter) => {
    setCharacter(updatedCharacter);
    localStorage.setItem("character", JSON.stringify(updatedCharacter));
  };

  const increaseExperience = () => {
    const experienceGained = 2; // Placeholder value for experience gained after exercise
    const updatedExperience = character.experience + experienceGained;

    // Update the level based on the experience gained
    const updatedLevel = Math.floor(Math.sqrt(updatedExperience / 100)) + 1;

    const updatedCharacter = {
      ...character,
      experience: updatedExperience,
      level: updatedLevel > 100 ? 100 : updatedLevel, // Cap the level at 100
    };

    updateCharacter(updatedCharacter);
  };

  return (
    <div>
      <CharacterDetails character={character} />
      <WorkoutPlan increaseExperience={increaseExperience} />
    </div>
  );
};

const CharacterDetails = ({ character }) => {
  return (
    <div className="character-details">
      <h2>Character Details</h2>
      <div className="character-info">
        <div>Name: {character.name}</div>
        <div>Level: {character.level}</div>
        <div>Experience: {character.experience}</div>
      </div>
    </div>
  );
};

export default App;
