import { usePlayerStore } from "@/store/playstore";

const MusicTableCardText = ({song}) => {
    const { isPlaying, currentMusic } = usePlayerStore(state => state)
    const isPlayingPlaylistSong = isPlaying && currentMusic?.playlist.albumId === song.albumId && currentMusic?.song.id === song.id
    return (
            <h3 className={`${isPlayingPlaylistSong ? "text-green-600" : ""}`}
            >{song.title}</h3>
    );
};

export default MusicTableCardText;