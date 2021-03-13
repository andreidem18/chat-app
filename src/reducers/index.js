import {types} from '../actions/actionsGenerator';

const INITIAL_STATE={
    room: "",
    user: "",
    access: false,
    token: "",
    backgroundColor: "#6693ff"
  }
  
  const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
      case types.addRoom:
        return {
          ...state,
          room: action.payload,
        }
      case types.quitRoom:
        return {
          ...state,
          room: ""
        }
      case types.login:
        return {
          ...state,
          user: action.payload.user,
          access: true,
          token: action.payload.token
        }
      case types.logOut:
        return {
          ...state,
          user: '',
          access: false,
          token: ''
        }
      default:
        return state;
    }
  }
  export default reducer;