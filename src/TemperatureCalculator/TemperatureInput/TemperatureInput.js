import React from 'react';

const TemperatureInput = (props) => {

    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };

    return (
        <fieldset>
                <legend>Enter temperature in {scaleNames[props.scale]}</legend>
                <input
                    type="text"
                    value={props.temperature}
                    onChange={props.changed} />
        </fieldset>
    );
}

export default TemperatureInput;