import axios from "axios";

export default function RandomPokemon({ pokemon, lastRevalidate }) {
  console.log(
    "Data do último revalidate:",
    new Date(lastRevalidate).toLocaleString("pt-BR", { timezone: "UTC" }),
    "ID: ",
    pokemon.id
  );
  return (
    <div>
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const randomId = Math.floor(Math.random() * 151) + 1; // Pokémon de 1 a 151 (Kanto)
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${randomId}`
  );
  const pokemon = response.data;
  const lastRevalidate = JSON.parse(JSON.stringify(new Date()));

  return {
    props: {
      pokemon,
      lastRevalidate,
    },
    revalidate: 300, // ISR para revalidar a cada 300 segundos
  };
}
