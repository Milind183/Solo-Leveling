import React, { useState } from "react";

const CharacterDetails = () => {
  const [character, setCharacter] = useState({
    name: "John",
    level: 1,
    experience: 0,
  });

  const increaseExperience = () => {
    const experienceGained = 10; // Placeholder value for experience gained after exercise
    const updatedExperience = character.experience + experienceGained;

    // Update the level based on the experience gained
    const updatedLevel = Math.floor(Math.sqrt(updatedExperience / 100)) + 1;

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      experience: updatedExperience,
      level: updatedLevel > 100 ? 100 : updatedLevel, // Cap the level at 100
    }));
  };

  return (
    <div className="character-details">
      <h2>Character Details</h2>
      <div className="character-info">
        <div>Name: {character.name}</div>
        <div>Level: {character.level}</div>
        <div>Experience: {character.experience}</div>
      </div>
      <button onClick={increaseExperience}>Gain Experience</button>
    </div>
  );
};

export default CharacterDetails;
