<template>
  <div>
    <input
      placeholder="Buscar nome do Pokemon"
      v-model="searchedPokemon"
      v-on:keyup="searchForPokemon"
    />
    <button>Buscar Nome</button>

    <div>
      <!-- <img src="" />

      <div>
        <p>Nome:</p>
        <p>Tipo:</p>
        <p>Experiência:</p>
      </div> -->

      <ul>
        <li v-for="pokemon in getPokemons" :key="pokemon.id">
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
      pokemons: [],
    };
  },

  mounted() {
    this.fetchPokemons();
  },

  computed: {
    ...mapGetters(["getPokemons"]),
  },

  methods: {
    ...mapActions(["fetchPokemons"]),

    searchForPokemon() {
      console.log("filtrando pokemons");
    },
  },
};
</script>

<style></style>
