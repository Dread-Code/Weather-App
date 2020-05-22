import { SET_FORECAST_DATA } from "../actions/index";

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload; 
      return { ...state, [city]: { forecastData } }; // tomara city como llave[], se esta creando un diccionario con el pyloan de la accion 
    default:
      return state;
  }
};
