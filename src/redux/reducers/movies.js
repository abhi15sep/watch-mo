import { ADD_NOW_PLAYING, ADD_UPCOMING } from "../action-types";

export default (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOW_PLAYING:
      return { ...state, nowPlaying: payload };
    case ADD_UPCOMING:
      return { ...state, upcoming: payload };

    default:
      return { ...state };
  }
};
