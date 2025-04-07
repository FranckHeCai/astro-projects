import { usePlayerStore } from "@/store/playstore";

const MusicTableCardText = ({song}) => {
    const { isPlaying, currentMusic } = usePlayerStore(state => state)
    const isPlayingPlaylist = isPlaying && currentMusic?.song.id === song.id
    return (
            <h3 className={`${isPlayingPlaylist ? "text-green-600" : ""}`}
            >{song.title}</h3>
    );
};

export default MusicTableCardText;