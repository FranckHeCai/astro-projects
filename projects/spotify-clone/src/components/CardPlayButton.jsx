import { useState } from "react";
import { PauseIcon, PlayIcon } from "./Player";
import { usePlayerStore } from "@/store/playstore";

export function CardPlayButton ({id}) {
    const { isPlaying, setIsPlaying } = usePlayerStore(state => state)
    return(
        <button className="absolute transition-all right-5 bottom-18 translate-y-4 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-10 rounded-full bg-green-600 p-2" onClick={()=> setIsPlaying(!isPlaying)}>
            {
                isPlaying 
                    ? <PauseIcon />
                    : <PlayIcon />
            }
        </button>
    )
}