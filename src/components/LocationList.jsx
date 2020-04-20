import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation/Index';
import './styles.css'

const LocationList = ({ cities, onSelectedLocation }) =>{

    const handleWeatherLocationOnClick = city=>{
        console.log("handleWeatherLocationOnClick");
        onSelectedLocation(city);
    }
    
    const strToComponents = cities  => (
        cities.map(city => 
            (
            <WeatherLocation 
                city = {city} 
                key = { city }
                onWeatherLocationClick = { () => handleWeatherLocationOnClick(city)}/>
            )
        )
    )

    return(
    <div className = "locationList">
        {strToComponents(cities)}
    </div>
);
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;