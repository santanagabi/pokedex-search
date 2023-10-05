<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      {{ pokemon.id }} - {{ pokemon.name }}
      <img :src="pokemon.srcImg" alt="Imagem do Pokémon" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "PokemonList",

  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}

img {
  max-width: 250px;
  max-height: 250px;
  margin-left: 10px;
}
</style>
