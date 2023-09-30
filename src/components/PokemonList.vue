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
