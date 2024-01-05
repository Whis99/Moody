import React, { useState } from 'react';
import { Slider } from "@material-tailwind/react";

const MoodSlider = ({ onMoodChange }) => {
  const [currentMood, setCurrentMood] = useState('Happy');

  const handleSliderChange = (event) => {
    // Mood options
    const moodOptions = ['Happy', 'Excited', 'Calm', 'Sad', 'Angry'];
    
    // Calculate the index based on the slider value
    const index = Math.round((event.target.value / 100) * (moodOptions.length - 1));

    // Update the current mood
    setCurrentMood(moodOptions[index]);

    // Notify the parent component about the mood change
    if (onMoodChange) {
      onMoodChange(moodOptions[index]);
    }
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <input
        type="range"
        min="0"
        max="100"
        step="25"
        value={currentMood}
        onChange={handleSliderChange}
        className="w-full h-8"
      />
      <p>Current Mood: {currentMood}</p>
      <Slider defaultValue={50} />
    </div>

    
  );
};

export default MoodSlider;
