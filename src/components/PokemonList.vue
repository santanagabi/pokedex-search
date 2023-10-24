<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon-list-item">
      {{ pokemon.id }} - {{ pokemon.name }}
      <img :src="pokemon.srcImg" alt="Imagem do Pokémon" />
      <button @click="deletedPokemon(pokemon.id)">Excluir</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PokemonList",

  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapActions(["deletePokemon"]),

    deletedPokemon(id) {
      // chamar uma ação no Vuex
      this.deletePokemon(id);

      console.log(id);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

.pokemon-list-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.pokemon-list-item:hover {
  height: 350px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

img {
  max-width: 250px;
  max-height: 250px;
  margin-left: 10px;
}
</style>
