import { createContext, useReducer } from "react";
import { playerReducer } from "../reducer/playerReducer";

const initialPlayerState = {
    playing: false,
    currentime: 0,
    currentSongIndex: 0,
    loop: false,
    shuffle: false,
};

 export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
    const [state, dispatch] = useReducer(playerReducer, initialPlayerState);

    return (
        <PlayerContext.Provider value={{ state, dispatch }}>
            {children}
        </PlayerContext.Provider>
    );
}
