import React from "react";
import MoodSlider from "../components/MoodSlider";

const MoodTrack = () =>{

    const handleMoodChange = (newMood) => {
        console.log(`Selected Mood: ${newMood}`);
    }

    return(
        <main>
            <section>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-orange font-quicksand font-bold pb-10">
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