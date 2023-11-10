
export const PLAYER = {
  PLAY: "player/play",
  PAUSE: "player/pause",
  NEXT: "player/next",
  PREV: "player/previous",
  LOOP: "player/loop",
  ADJUST_TIME: "player/adjustTime",
  SETSONG: "player/setSong",
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case PLAYER.PLAY:
      return {
        ...state,
        playing:true
     
      };

    case PLAYER.PAUSE:
      return {
        ...state,
        playing:false
      
      };

    case PLAYER.NEXT:
        let currentSongIndex = state.currentSongIndex+1;
      return {
        ...state,
        currentSongIndex
       


      };

    case PLAYER.PREV:
      return {
        ...state,
        
      };

    case PLAYER.LOOP:
      return {
        ...state,
        // Thực hiện các thay đổi liên quan đến LOOP
      };

    case PLAYER.ADJUST_TIME:
      return {
        ...state,
        // Thực hiện các thay đổi liên quan đến ADJUST_TIME
      };

    case PLAYER.SETSONG:
      return {
        ...state,
        // Thực hiện các thay đổi liên quan đến SETSONG
      };

    default:
      return state;
  }
};