import React from "react";
import MoodSlider from "../components/MoodSlider";
import MoodCard from "../components/MoodCard";

const MoodTrack = () =>{

    const handleMoodChange = (newMood) => {
        console.log(`Selected Mood: ${newMood}`);
    }

    return(
        <main>
            <section>
                <MoodCard />
            </section>
        </main>
    )
}

export default MoodTrack;