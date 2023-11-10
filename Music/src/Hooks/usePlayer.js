import { useContext } from "react";
import { PlayerContext } from "../features/context/PlayerProvider";
import { PLAYER } from "../features/reducer/playerReducer";
import { songs } from "../data/data";

export const usePlayer = () => {
    const { state, dispatch } = useContext(PlayerContext);

    const handlePlay = () => {
        dispatch({ type: PLAYER.PLAY });
    };

    const handlePause = () => {
        dispatch({ type: PLAYER.PAUSE });
    };

    const currentSong = songs.find((s)=>s.id===state.currentSongIndex)

    return {
        ...state,
        dispatch,
        currentSong,
        onPlay: handlePlay,
        onPause: handlePause
       
    };
};