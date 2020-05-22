import { SET_CITY } from '../actions'

  export const city = (state = {}, action) => {
      switch (action.type) {
          case SET_CITY:
            return action.payload; ///se cambia porque ya city esta declarado desde el combine reducer 
          default:
              return state;
      }
  }