import React from 'react';

const TemperatureInput = (props) => {

    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };

    let validator = null;

    if (props.validator) {
        validator = <p className='TemperatureValidator'>Wrong value in field!</p>
    }

    return (
        <fieldset>
                <legend>Enter temperature in {scaleNames[props.scale]}</legend>
                <input
                    type="text"
                    value={props.temperature}
                    onChange={props.changed} />
                {validator}
        </fieldset>
    );
}

export default TemperatureInput;