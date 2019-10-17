import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput/TemperatureInput';
import TemperatureInformation from './TemperatureInformation/TemperatureInformation';
import './TemperatureCalculator.css'

class TemperatureCalculator extends Component {
    state = {
        celsius: '',
        fahrenheit: ''
    }

    celsiusToFahrenheit(event) {
        const temperature = parseFloat(event.target.value);
        const fahrenheit = (temperature * 9 / 5) + 32;
        const fahrenheit1 = Math.round(fahrenheit * 1000) / 1000;
        this.setState({
            celsius: event.target.value,
            fahrenheit: fahrenheit1.toString()
        });
        
    }

    fahrenheitToCelsius(event) {
        const temperature = parseFloat(event.target.value);
        const celsius = (temperature - 32) * 5 / 9;
        const celsius1 = Math.round(celsius * 1000) / 1000
        this.setState({
            celsius: celsius1.toString(),
            fahrenheit: event.target.value
        });
    }

    render() {
        return <div className="TemperatureCalculator">
            <TemperatureInput
                scale='c'
                temperature={this.state.celsius}
                changed={this.celsiusToFahrenheit.bind(this)} />
            <TemperatureInput
                scale='f'
                temperature={this.state.fahrenheit}
                changed={this.fahrenheitToCelsius.bind(this)} />
            <TemperatureInformation celsiusTemperature={this.state.celsius} />
        </div>
    }
};

export default TemperatureCalculator;