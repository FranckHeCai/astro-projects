import { useState } from "react";
import { PauseIcon, PlayIcon } from "./Player";
import { Play, Pause } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playstore";
import PlaylistCardPlayIcon from "./ui/PlaylistCardPlayIcon";


export function CardPlayButton ({ id, className, iconColor }) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    const handleClick = () =>{
        if(isPlayingPlaylist){
            setIsPlaying(false)
            return
        }

        fetch(`api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist } = data
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, song: songs[0]})
        })
    }
    return(
        <button className={className}  onClick={handleClick}>
                {
                    isPlayingPlaylist
                        ? <Pause className={`h-8 w-8 ${iconColor}`} />
                        : <Play className={`h-8 w-8 ${iconColor}`} />
                }
        </button>
    )
}