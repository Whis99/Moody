import React from "react";
import MoodSlider from "./MoodSlider";
import Sidebar from "./SideBar";

const MoodCard = () => {

    const handleMoodChange = (newMood) => {
        console.log(`Selected Mood: ${newMood}`);
    }

    return (
        <main className="bg-white shadow-md rounded-lg">
            <div className="flex">
                <div className="w-1/4">
                    <Sidebar />
                </div>
        
                {/* MoodSlider */}
                <div className="w-3/4 p-4 py-24">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-orange font-quicksand font-bold pb-10">
                            What's your mood today
                    </h1>
                    <MoodSlider onMoodChange={handleMoodChange} />
                </div>
            </div>
        </main>
    );
  };
  
  export default MoodCard;