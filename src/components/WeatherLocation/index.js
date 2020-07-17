import React, { Component } from 'react';
import Location from './../WeatherLocation/Location';
import WeatherData from './../WeatherData';
import './styles.css';
import{
    // CLOUD,
     CLOUDY,
// SUN,
    // RAIN,
    // SNOW,
     WINDY,
} from './../../constants/weathers';
//import { Component } from 'react';

const data = {
    temperature:5,
    weatherState: CLOUDY,
    humidity: 17,
    wind: '10 m/s',
}

const data2 = {
    temperature:15,
    weatherState: WINDY,
    humidity: 25,
    wind: '11 m/s',
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: 'La Paz',
            data: data,
        };
    }

    handleUpdateClick=()=>{
        console.log("actualizado");
         
        this.setState({
            //city: 'Cochabamba',
            data: data2,
        });
    }
    render(){
        const { city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }

}

export default WeatherLocation;