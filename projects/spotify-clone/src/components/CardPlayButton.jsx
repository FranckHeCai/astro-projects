import { useState } from "react";
import { PauseIcon, PlayIcon } from "./Player";
import { usePlayerStore } from "@/store/playstore";

export function CardPlayButton ({ id }) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    const handleClick = () =>{
        if(isPlayingPlaylist){
            setIsPlaying(false)
            return
        }

        // setIsPlaying(!isPlaying)

        // setCurrentMusic({
        //     playlist:{
        //         id
        //     }
        // })

        fetch(`api/get-info-playlist-json?id${id}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist } = data
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, song: songs[0]})
        })
    }
    return(
        <button className="absolute transition-all right-5 bottom-18 translate-y-4 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-10 rounded-full bg-green-600 p-2" onClick={handleClick}>
            {
                isPlayingPlaylist
                    ? <PauseIcon />
                    : <PlayIcon />
            }
        </button>
    )
}