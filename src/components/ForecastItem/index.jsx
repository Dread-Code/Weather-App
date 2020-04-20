import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/Index';

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div>
           <h2>Dia: {weekDay} Hora: {hour}hs</h2> 
        </div>
        <WeatherData data = {data} />
    </div>
    
);

ForecastItem.propTypes =  {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
         weatherState: PropTypes.string,
         humidity: PropTypes.number.isRequired,
         wind: PropTypes.string.isRequired
         }
     )  
}

export default ForecastItem;