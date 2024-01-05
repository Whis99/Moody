import React from "react";
import MoodSlider from "../components/MoodSlider";

const MoodTrack = () =>{

    const handleMoodChange = (newMood) => {
        console.log(`Selected Mood: ${newMood}`);
    }

    return(
        <main>
            <section>
                <h1 className="font-quicksand font-bold">
                    What's your mood today
                </h1>
            </section>
            <section>
                <MoodSlider onMoodChange={handleMoodChange} />
            </section>
        </main>
    )
}

export default MoodTrack;