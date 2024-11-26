import React, { useState } from 'react';

function App() {
    const [temperature, setTemperature] = useState(0);
    const [convertedTemperature, setConvertedTemperature] = useState(0);

    const handleTemperatureChange = (event) => {
        setTemperature(event.target.value);
    };

    const convertFahrenheitToCelsius = () => {
        const celsius = (temperature - 32) * 5 / 9;
        setConvertedTemperature(celsius.toFixed(2));
    };

    const convertCelsiusToFahrenheit = () => {
        const fahrenheit = (temperature * 9 / 5) + 32;
        setConvertedTemperature(fahrenheit.toFixed(2));
    };

    return (
        <div>
            <label>
                Enter Temperature here:
                <input type="number" value={temperature} onChange={handleTemperatureChange} />
            </label>
            <br />
            <button onClick={convertFahrenheitToCelsius}>Convert Fahrenheit to Celsius</button>
            <button onClick={convertCelsiusToFahrenheit}>Convert Celsius to Fahrenheit</button>
            <p>Converted Temperature: {convertedTemperature}</p>
        </div>
    )
}
export default App;