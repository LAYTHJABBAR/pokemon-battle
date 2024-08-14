import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
    name: string;
    sprites: { front_default: string, back_default: string };
    moves: { move: { name: string }, version_group_details: { move_learn_method: { name: string }, level_learned_at: number }[] }[];
}

export const usePokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const getRandomPokemon = async () => {
            const id = Math.floor(Math.random() * 100) + 1;  // Generate a random ID between 1 and 100 (replace 100 with total number of Pokémon if needed)
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);  // Make a GET request to the PokeAPI to fetch a random Pokémon
            setPokemon(response.data);  // Set the fetched Pokémon data to the state
        };

        getRandomPokemon();  // Call the getRandomPokemon function when the component mounts
    }, []);

    return pokemon;  // Return the fetched Pokémon data
};
