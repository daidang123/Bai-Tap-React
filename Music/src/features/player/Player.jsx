import React, { useEffect,useRef } from 'react'
import { usePlayer } from '../../Hooks/usePlayer';


function Player() {
    const  {playing, onPlay , onPause,currentSong} = usePlayer ();
    const audioRef = useRef();

    useEffect(()=>{
        const audioEL= audioRef.current;
        if(playing){
           audioEL.play()
        }else{
            audioEL.pause();

        }
    } ),[ playing.currentSong]

  return (
    <div>

        <audio
        ref={audioRef}
        src={currentSong.src}


        />

        <div>
        <button onClick={playing ? onPause : onPlay}>
          {playing ? 'Pause' : 'Play'}
        </button>
        </div>

    </div>
  )
}

export default Player