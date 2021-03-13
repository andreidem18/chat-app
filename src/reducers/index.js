import {types} from '../actions/actionsGenerator';

const INITIAL_STATE={
    room: "sala",
    user: "andres",
  }
  
  const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
      case types.setRoom:
        return {
          ...state,
          room: action.payload.room,
          user: action.payload.user
      }
      default:
        return state;
    }
  }
  export default reducer;