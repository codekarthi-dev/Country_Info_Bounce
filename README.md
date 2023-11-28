# Country Information App

This is a simple React frontend application that allows users to input a country and fetch information from a Node.js backend server. The backend server communicates with the REST Countries API to retrieve data about the specified country.

## Features

- Input a country name and retrieve information about that country.
- Display country information including common name, official name, capital, population, and flag.

## Technologies Used

- Frontend: React
- Backend: Node.js with Express
- External API: [REST Countries API](https://restcountries.com/)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/country-information-app.git
    Navigate to the frontend directory:

    cd country-information-app/frontend
    Install dependencies:

    npm install
    Run the frontend:

    npm start
    The frontend will be accessible at https://frontend-bounce.onrender.com

2.  Open another terminal, navigate to the backend directory, and repeat steps 3-4 for the backend:

    ```bash

    cd ../backend
    npm install
    npm start
    The backend will be running at https://bounce-backend-2ps6.onrender.com/

# Usage
Open your browser and go to http://localhost:3000.
Enter a country name in the input field and click "Get Info."
View the displayed country information, including the flag.
