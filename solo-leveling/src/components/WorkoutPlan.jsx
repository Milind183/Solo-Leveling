import React from "react";

const WorkoutPlan = ({ increaseExperience }) => {
  const workoutPlan = [
    {
      day: 1,
      exercises: [
        { name: "Pushups", sets: 5, reps: 8 },
        { name: "Chinups", sets: 5, reps: 8 },
        { name: "Dips", sets: 5, reps: 8 },
        { name: "Australian Rows", sets: 3, reps: 9 },
        { name: "Pike Pushups", sets: 3, reps: 9 },
        { name: "Toe-to-bar OR knee-to-chest", sets: 3, reps: 8 },
      ],
    },
    {
      day: 2,
      exercises: [
        { name: "Squats", sets: 5, reps: 8 },
        { name: "Lunges", sets: 5, reps: 8 },
        { name: "Box Jumps or Knee Tucks", sets: 3, reps: 15 },
        { name: "Single-Leg Romanian Deadlift", sets: 3, reps: 8 },
        { name: "Side Lunges", sets: 3, reps: "20 ft" },
        { name: "V-Sit Ups", sets: 3, reps: 8 },
      ],
    },
    {
      day: 3,
      rest: true,
    },
    {
      day: 4,
      exercises: [
        { name: "Decline Pushups", sets: 4, reps: 8, finalSetToFailure: 1 },
        { name: "Pull-Ups", sets: 4, reps: 8, finalSetToFailure: 1 },
        { name: "Dips", sets: 4, reps: 8, finalSetToFailure: 1 },
        {
          name: "Close Grip Underhand Grip Australian Rows",
          sets: 4,
          reps: 8,
          finalSetToFailure: 1,
        },
        { name: "Incline Pushups", sets: 4, reps: "RPE", finalSetToFailure: 1 },
        { name: "Plank OR Single Arm Plank", sets: 3, reps: 9 },
      ],
    },
    {
      day: 5,
      exercises: [
        { name: "4/3/1 Tempo Squats", sets: 4, reps: 8 },
        { name: "4/3/1 Temp Plie Squat", sets: 4, reps: 8 },
        { name: "Bulgarian Split Squat", sets: 3, reps: 8 },
        { name: "Single-Leg Hip Thrust", sets: 3, reps: 8 },
        { name: "Cycle Lunges", sets: 3, reps: 20 },
        {
          name: "Sprint Intervals",
          workDuration: ":30",
          restDuration: ":30",
          sets: 5,
        },
        { name: "Flutter Kicks", sets: 3, reps: 50 },
      ],
    },
    {
      day: 6,
      rest: true,
    },
    {
      day: 7,
      exercises: [
        { name: "Work on Handstand" },
        { name: "Work on Cobra Pose" },
        { name: "Work on Dragon Flag" },
      ],
    },
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentExercises =
    workoutPlan.find((dayData) => dayData.day === currentDay)?.exercises || [];

  const handleClick = () => {
    increaseExperience();
  };

  return (
    <div className="workout-plan">
      <div className="day">
        <h3>Today's Exercises</h3>
        <ul className="exercise-list">
          {currentExercises.map((exercise, index) => (
            <li className="exercise-item" key={index}>
              <div className="exercise">{exercise.name}</div>
              <div className="sets-reps">
                Sets: {exercise.sets}, Reps: {exercise.reps}
                <button onClick={handleClick}>Click</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutPlan;
