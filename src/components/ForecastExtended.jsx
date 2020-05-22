import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';



const renderForcastItemDays = (forecastData) =>{    
      
    return forecastData.map(forcast=>(
        <ForecastItem 
            key = {`${forcast.weekDay}${forcast.hour}`}
            weekDay = {forcast.weekDay} 
            hour = {forcast.hour} 
            data = {forcast.data}/>
    ))
}
const renderProgress = () => {
    return <h3>Cargando Pronostico Extendido...</h3>;
}

const ForecastExtended = ({city, forecastData}) =>  (
        <div>
           <h2 className = "forecast-title">Pronostico extendido para {city}</h2>  
           { forecastData ?
           renderForcastItemDays(forecastData) : 
           renderProgress() }
        </div>
);


ForecastExtended.propTypes ={
    city : PropTypes.string.isRequired,
    forecast: PropTypes.array
}

export default ForecastExtended;