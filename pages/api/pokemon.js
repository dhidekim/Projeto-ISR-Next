// pages/api/random-pokemon.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const randomId = Math.floor(Math.random() * 151) + 1; // Pokémon de 1 a 151 (Kanto)
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Falha ao obter dados" });
  }
}
