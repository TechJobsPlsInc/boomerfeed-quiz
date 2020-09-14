
const initialState = {
    login : "null"
};

/** 
    Sets the current topic
    @SET_CURRENT_TOPIC : sets the current category
*/
export default function(state = initialState, action) {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return {
          ...state,
          user: action.payload
        };
      case "USER_LOADING":
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }