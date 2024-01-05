import {React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import gosthy from '../assets/Gosthy.png'
import '../App.css'

const Home = () =>{

    const navigate = useNavigate();

    const handleClick = () => { 
        navigate('/moodtrack')
    }

    return(
        <main className="flex flex-col items-center justify-center h-screen">

            <div className= "mb-4">
                <img src={gosthy} className="w-40 h-auto" alt="Vite logo" />
            </div>

            <h1 className="font-quicksand font-bold">Welcome to M☺☻dy</h1>
            
            <div className="card">
                <button onClick={() => handleClick()}>
                Get started
                </button>
            </div>
        </main>
    )
}

export default Home;