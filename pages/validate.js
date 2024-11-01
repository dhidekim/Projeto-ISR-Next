import axios from "axios";

let lastValidPokemon = null;
let lastRevalidate = null;
let attemptCounter = 0;

export default function RandomPokemon({ pokemon, lastRevalidate }) {
  console.log(
    "Data do último revalidate:",
    new Date(lastRevalidate).toLocaleString("pt-BR", { timeZone: "UTC" }),
    "ID: ",
    pokemon.id
  );
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>ID: {pokemon.id}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

export async function getStaticProps() {
  const randomId = Math.floor(Math.random() * 151) + 1; // Pokémon de 1 a 151 (Kanto)
  let pokemon = null;
  let revalidateTime = 10; // Revalidação padrão

  attemptCounter += 1;

  try {
    let response;
    if (attemptCounter < 4 || attemptCounter > 7) {
      response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
    } else {
      throw new Error("Simulated API error");
    }

    if (response.status === 200) {
      pokemon = response.data;
      lastValidPokemon = pokemon;
      lastRevalidate = new Date().toISOString();

      console.log(
        "Data do último revalidate:",
        new Date(lastRevalidate).toLocaleString("pt-BR", { timeZone: "UTC" }),
        "ID: ",
        pokemon.id,
        "Tentativa: ",
        attemptCounter
      );
    }
  } catch (error) {
    console.error("Falha ao obter dados", error);
    // Mantém os dados anteriores em caso de falha
    pokemon = lastValidPokemon;
    lastRevalidate = lastRevalidate;
    console.log(
      "Data do último revalidate:",
      new Date(lastRevalidate).toLocaleString("pt-BR", { timeZone: "UTC" }),
      "ID: ",
      pokemon.id,
      "Tentativa: ",
      attemptCounter
    );
  }

  return {
    props: {
      pokemon,
      lastRevalidate,
    },
    revalidate: revalidateTime, // Revalida de acordo com o status da API
  };
}
