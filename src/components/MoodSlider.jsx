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
      <Slider 
        defaultValue={currentMood}
        min={0}
        max={100}
        step={25}
        onChange={handleSliderChange}
      />
      <p className="font-quicksand font-bold text-xl text-dark-blue">Current Mood: {currentMood}</p>
    </div>

    
  );
};

export default MoodSlider;
