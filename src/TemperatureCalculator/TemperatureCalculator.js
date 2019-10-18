import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput/TemperatureInput';
import TemperatureInformation from './TemperatureInformation/TemperatureInformation';
import './TemperatureCalculator.css'

class TemperatureCalculator extends Component {
    state = {
        celsius: '',
        celsiusValidatorError: false,
        fahrenheit: '',
        fahrenheitValidatorError: false
    }

    celsiusToFahrenheit(event) {

        const temperature = event.target.value;

        if (!temperature.length || isNaN(temperature)) {
            this.setState({
                celsius: temperature,
                celsiusValidatorError: !!temperature.length,
                fahrenheit: ''
            });
            return;
        }

        const fahrenheit = this.roundTemperature(this.convertToFahrenheight(temperature));

        this.setState({
            celsius: temperature,
            fahrenheit: fahrenheit.toString(),
            celsiusValidatorError: false
        });
        
    }

    fahrenheitToCelsius(event) {

        const temperature = event.target.value;

        if (!temperature.length || isNaN(event.target.value)) {
            this.setState({
                fahrenheit: temperature,
                fahrenheitValidatorError: !!temperature.length,
                celsius: ''
            });
            return;
        }

        const celsius = this.roundTemperature(this.convertToCelsius(temperature));
        
        this.setState({
            fahrenheit: temperature,
            celsius: celsius.toString(),
            fahrenheitValidatorError: false
        });
    }

    roundTemperature(temperature) {
        return Math.round(temperature * 1000) / 1000;
    }

    convertToFahrenheight(temperature) {
        return (temperature * 9 / 5) + 32;
    }

    convertToCelsius(temperature) {
        return (temperature - 32) * 5 / 9;
    }
    
    parseNumberChecker(inputValue) {
        return parseFloat(inputValue);
    }

    render() {
        return <div className="TemperatureCalculator">
            <TemperatureInput
                scale='c'
                temperature={this.state.celsius}
                changed={this.celsiusToFahrenheit.bind(this)}
                validator={this.state.celsiusValidatorError} />
            <TemperatureInput
                scale='f'
                temperature={this.state.fahrenheit}
                changed={this.fahrenheitToCelsius.bind(this)}
                validator={this.state.fahrenheitValidatorError} />
            <TemperatureInformation celsiusTemperature={this.state.celsius} />
        </div>
    }
};

export default TemperatureCalculator;