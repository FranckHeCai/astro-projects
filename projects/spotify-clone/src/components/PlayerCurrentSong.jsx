const PlayerCurrentSong = ({song}) => {
    const {image, title, artists} = song
    return (
        <div className="flex gap-4">
            <picture>
                <img className="w-14 rounded" src={image} alt={`${title} song cover`} />
            </picture>
            <div className="flex flex-col justify-center gap-1.5">
                <h3 className="text-sm">{title}</h3>
                <h4 className="text-xs text-neutral-400">{artists}</h4>
            </div>
        </div>
    );
};

export default PlayerCurrentSong; 