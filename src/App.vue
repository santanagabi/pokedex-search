<template>
  <div>
    <input
      placeholder="Buscar nome do Pokemon"
      v-model="searchedPokemon"
    />
    <button>Buscar Nome</button>

    <div>
      <ul>
        <li v-for="pokemon in filteredPokemons" :key="pokemon.id">
          {{ pokemon.id }} - {{ pokemon.name }}
          <img :src="pokemon.srcImg" alt="Imagem do Pokémon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  data() {
    return {
      // Guarda o valor no input
      searchedPokemon: ""
    };
  },

  mounted() {
    this.fetchPokemons();
  },

  computed: {
    ...mapGetters(["getPokemons"]),

    filteredPokemons() {
      return this.getPokemons.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(this.searchedPokemon.toLowerCase())
      )
    }
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
  },
};
</script>

<style></style>
