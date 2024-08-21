import { styled } from 'styled-components';
import React, { useState, useEffect } from 'react';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 25px;
  max-width: 720px;
  margin: 0 auto;
  
  h1 {
    word-break: break-word;
    line-height: 28px;
  }
`;

const Inner = styled('div')`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    input {
      font-size: 14px;
      color: #000;
      -webkit-appearance: none;
      outline: none;
      border-bottom: 1px solid #eaeaea;
      width: 100%;

    }
    input[type=number],
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
      -moz-appearance: textfield;
    }
  }
`;
function App() {
  const [gasPriceInput, setGaspriceInput] = useState('');
  const [carConsumption, setCarConsumption] = useState('');
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const isValidInput = gasPriceInput && carConsumption && distance;
    if (isValidInput) {
      const consumedGas = Number(distance) * Number(carConsumption);
      setResult((consumedGas * Number(gasPriceInput)).toFixed(2));
    }
  }, [gasPriceInput, carConsumption, distance]);

  const handleInputChange = (e, setter) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    setter(value);
  };

  return (
    <Wrapper>
      <h1>Vad kostar?</h1>
      <Inner>
        <div>
          <label htmlFor="liter-price">Literpris</label>
          <input
            type="text"
            id="liter-price"
            value={gasPriceInput}
            onChange={(e) => handleInputChange(e, setGaspriceInput)}
            placeholder='0'
          />
        </div>
        <div>
          <label htmlFor="car-consumption">Liter per km</label>
          <input
            type="text"
            id="car-consumption"
            value={carConsumption}
            onChange={(e) => handleInputChange(e, setCarConsumption)}
            placeholder='0'
          />
        </div>
        <div>
          <label htmlFor="travel-distance">Sträcka i km</label>
          <input
            type="text"
            id="travel-distance"
            value={distance}
            onChange={(e) => handleInputChange(e, setDistance)}
            placeholder='0'
          />
        </div>

      </Inner>
      {result && <h2>Total kostnad {result}kr</h2>}
    </Wrapper>
  );
}

export default App;
