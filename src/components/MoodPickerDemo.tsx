import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => queueRerenderWithNewMoodValue("happy");

  const handleMoodChangeToConfused = () =>
    queueRerenderWithNewMoodValue("confused");

  const handleMoodChangeToSad = () => queueRerenderWithNewMoodValue("sad");

  const handleMoodChangeToOnFire = () =>
    queueRerenderWithNewMoodValue("on fire");

  const handleMoodChangeToProductive = () =>
    queueRerenderWithNewMoodValue("productive");

  const handleMoodChangeToSpiky = () => queueRerenderWithNewMoodValue("spiky");

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToOnFire}>🔥</button>
      <button onClick={handleMoodChangeToProductive}>🏭</button>
      <button onClick={handleMoodChangeToSpiky}>🦔</button>
    </>
  );
}

export default MoodPickerDemo;
