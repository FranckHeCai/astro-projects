import Play from "@/icons/Play.astro";
import Pause from "@/icons/Pause.astro";
import { useEffect, useRef, useState } from "react";

const PlayIcon = () => <svg viewBox="0 0 24 24" class="h-8 w-8" fill="black"
><path fill="black" d="M8 5.14v14l11-7-11-7z"></path></svg>

const PauseIcon = () => 
<svg class="h-8 w-8" aria-hidden="true" viewBox="0 0 24 24" fill="black">
    <g transform="translate(4, 4)">
        <path fill="black"
        d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
        >
        </path>      
    </g>
  </svg>

export default function Player () {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef()
    

    useEffect(() => {
        audioRef.current.src = "/music/1/01.mp3"
    }, [])
    
    const handleClick = () => {
        if(isPlaying){
            audioRef.current.pause()
        } else {
            audioRef.current.play()
            audioRef.current.volume = 0.1
        }

        setIsPlaying(!isPlaying)
    }

    return(
        <div className="flex  justify-between w-full  px-5 z-50">
            <div className="flex">
                Song Info
            </div>
            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button onClick={handleClick} className="bg-neutral-50 rounded-full">
                    {
                        isPlaying 
                        ? <PauseIcon />
                        : <PlayIcon />
                    }
                    </button>
                </div>
            </div>
            <div >
                Ajust Volume
            </div>
            <audio ref={audioRef}></audio>
        </div>
    )
}