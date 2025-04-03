import Play from "@/icons/Play.astro";
import Pause from "@/icons/Pause.astro";
import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/playstore";
import PlayerCurrentSong from "./PlayerCurrentSong";
import { Slider } from "@/components/ui/slider"

export const PlayIcon = () => <svg viewBox="0 0 24 24" class="h-8 w-8" fill="black"
><path fill="black" d="M8 5.14v14l11-7-11-7z"></path></svg>

export const PauseIcon = () => 
<svg class="h-8 w-8" aria-hidden="true" viewBox="0 0 24 24" fill="black">
    <g transform="translate(4, 4)">
        <path fill="black"
        d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
        >
        </path>      
    </g>
  </svg>

export default function Player () {
    // const [isPlaying, setIsPlaying] = useState(false)
    // const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef()
    const {isPlaying, setIsPlaying, currentMusic} = usePlayerStore(state => state)
    const {songs, playlist, song} = currentMusic
    useEffect(() => {
        isPlaying
        ? audioRef.current.play()
        : audioRef.current.pause()
    }, [isPlaying])
    
    useEffect(() => {
        
        if(song){
            const currentSong = String(song.id).padStart(2,"0")
            const src = `/music/${playlist?.id}/${currentSong}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
    }, [currentMusic])
    
    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    return(
        <div className="flex  justify-between w-full  px-2 z-50">
            <div>
                <PlayerCurrentSong {...currentMusic.song} />
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
                <Slider
                    defaultValue={[100]}
                    max={100}
                    min={0}
                    className="w-[95px]"
                    onValueChange={(value)=>{
                        const [newValue] = value
                        audioRef.current.volume = newValue/100
                    }}
                 />
            </div>
            <audio ref={audioRef}></audio>
        </div>
    )
}