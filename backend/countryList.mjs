// backend/server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

// const express = require('express');
// const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


app.get('/country/:name', async (req, res) => {
  const countryName = req.params.name;
  try {
    const apiResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const countryData = await apiResponse.json();
    
    if (countryData.length > 0) {
      const { name, capital, population, flags } = countryData[1]
      res.json({ name, capital, population, flags });
    } else {
      res.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    console.error('Error fetching country information:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
