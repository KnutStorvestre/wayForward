![Vite](https://img.shields.io/badge/built%20with-Vite-646CFF.svg?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=flat&logo=react&logoColor=61dafb)


# Way Forward - Website
Way Forward is a non-profit organization dedicated to integrating and including multicultural children and youth in Norwegian society, with a special focus on ensuring equal participation for girls in leisure activities and sports. Founded in 2004, we offer a variety of activities such as homework help, bike workshops, Friday club, and more.
## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Deployment](#deployment)
5. [Contributing](#contributing)
6. [License](#license)

## Features
- Interactive map powered by Google Maps
- Clean, responsive UI
- Fast local development with Vite

## Technologies Used
- **React** for building the user interface
- **TypeScript** for type safety
- **CSS** for styling
- **Vite** for fast development and build tools
- **AWS** for deployment

## Getting Started

### Prerequisites
- Node.js (version 22.12.0 or later)
- npm or yarn

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/KnutStorvestre/wayForward.git
   ```

2. Navigate to the project folder:

   ```bash
   cd wayForward
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables (Optional):

    Create two environment files in the root of the project:

    * `.env.development` (for local development)
    * `.env.production` (for production builds)

    You can do this by using the .env.example file:

    ```bash
    cp .env.example .env.development
    cp .env.example .env.production
    ```

    Add the following keys to each file:

    ```env
    VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here
    VITE_GOOGLE_MAPS_MAP_ID=your-google-maps-map-id-here
    ```

    > ⚠️ Make sure not to commit your `.env` files to version control. These should be added to `.gitignore`.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit the local server. Note that the port may vary depending on system availability. Typically, it will be displayed in the terminal after running the development server (e.g., http://localhost:5173).


## Deployment
This project is deployed on [AWS](https://aws.amazon.com/). Visit the live site [here](https://www.wayforward.no/).

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.