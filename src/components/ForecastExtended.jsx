import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast'

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];

const data ={
    temperature: '10',
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}
*/

const api_key ="130a5de1cb581a3891833e19ed5ebbe7";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{


     
    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        const {city} = this.props;
        this.updateCity(city);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = (city) =>{
        
        const url_forcast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forcast)
        .then((resolve)=> resolve.json())
        .then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        )
    }
    

    renderForcastItemDays(forecastData){    
      
        return forecastData.map(forcast=>(
            <ForecastItem 
                key = {`${forcast.weekDay}${forcast.hour}`}
                weekDay = {forcast.weekDay} 
                hour = {forcast.hour} 
                data = {forcast.data}/>
        ))
    }
    renderProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }

    render(){

        const {city} = this.props;
        const { forecastData } = this.state;
        return (<div>
           <h2 className = "forecast-title">Pronostico extendido para {city}</h2>  
           { forecastData ?
           this.renderForcastItemDays(forecastData) : 
           this.renderProgress() }
        </div>);
    }
}

ForecastExtended.propTypes ={
    city : PropTypes.string.isRequired
}

export default ForecastExtended;