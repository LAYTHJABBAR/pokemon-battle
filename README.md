# React Interview App
## Prerequisites
Ensure that you have [Node.js](https://nodejs.org/en/download/) installed on your machine.

## Installation
Follow the steps below to set up the project on your local machine:
1. Update npm to the latest version: Run `npm install -g npm`
2. Clone this repository: Run `git clone <repository_url>`
3. Navigate into the cloned repository: Run `cd <repository_name>`
4. Install the project dependencies: Run `npm install`
5. Start the project: Run `npm start`
6. View the running application: Load `http://localhost:3000/` in your web browser


# Pokémon Battle Simulator


<img width="1863" alt="image" src="https://github.com/user-attachments/assets/14908f96-ab9d-4c52-b306-e90076863793">


A simple Pokémon battle simulator built with React and TypeScript. This project uses the Pokémon API to randomly select two Pokémon and their moves, allowing users to simulate a battle between them.

## Features

- **Random Pokémon Selection**: Fetches two random Pokémon using the Pokémon API.
- **Battle View Display**: Displays the Pokémon's name, sprite, and a randomly selected move with its power.
- **Battle Execution**: Simulates a battle between the two Pokémon. The Pokémon with the stronger move wins, and the outcome is logged in the battle log.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/pokemon-battle-simulator.git
    cd pokemon-battle-simulator
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

4. **Open in your browser**:
    The application will be running at `http://localhost:3000`.

## Project Structure

```plaintext
src/
|-- components/
|   |-- BattleView.tsx          # Main battle view component
|   |-- PokemonCard.tsx         # Component to display Pokémon details
|-- hooks/
|   |-- usePokemon.ts           # Custom hook for fetching random Pokémon data
|-- utils/
|   |-- getRandomElement.ts     # Utility function to get a random element from an array
|-- App.tsx                     # Main application component
|-- App.css                     # Styling for the App component
|-- index.tsx                   # Entry point of the React application
