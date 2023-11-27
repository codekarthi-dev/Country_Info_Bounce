// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchCountryInfo = async () => {
    try {
      const response = await fetch(`https://bounce-backend-2ps6.onrender.com/country/${country}`);
      const data = await response.json();

      if (response.ok) {
        setCountryInfo(data);
        setError(null);
      } else {
        setCountryInfo(null);
        setError(data.error || 'Country not found');
      }
    } catch (error) {
      console.error('Error fetching country information:', error);
      setError('Internal server error');
    }
  };

  const handleInputChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryInfo();
  };

  return (
    <div className="app-container">
      <h1>Country Information App</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Enter Country:
          <input
            type="text"
            value={country}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Get Info</button>
      </form>
      {error && <p className="error-message">Error: {error}</p>}
      {countryInfo && (
        <div className="country-info-container">
          <h2>Country Information</h2>
          {countryInfo.flags && <img src={countryInfo.flags.png} alt="Flag" />}
          <p>
            <strong>Common Name:</strong> {countryInfo.name.common}
          </p>
          <p>
            <strong>Official Name:</strong> {countryInfo.name.official}
          </p>
          <p>
            <strong>Capital:</strong> {countryInfo.capital[0]}
          </p>
          <p>
            <strong>Population:</strong> {countryInfo.population}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
