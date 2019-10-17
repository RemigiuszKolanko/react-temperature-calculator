import React from 'react';

const TemperatureInformation = (props) => {
    const temperature = props.celsiusTemperature;

    return (
        <p>The water would{temperature < 100 && ' not'} boild.</p>
    );
}

export default TemperatureInformation;