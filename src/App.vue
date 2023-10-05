<template>
  <div>
    <input placeholder="Buscar nome do Pokemon" v-model="searchedPokemon" />

    <h2>Pokemons visíveis: {{ this.getVisiblePokemons }}</h2>

    <div>
      <PokemonList :pokemons="filteredPokemons"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PokemonList from "./components/PokemonList.vue";

export default {
  name: "App",

  data() {
    return {
      // Guarda o valor no input
      searchedPokemon: "",
    };
  },

  components: {
    PokemonList,
  },

  mounted() {
    this.fetchPokemons();
  },

  computed: {
    ...mapGetters(["getPokemons", "getVisiblePokemons"]),

    filteredPokemons() {
      const filteredData = this.getPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchedPokemon.toLowerCase())
      );

      this.SET_FILTERED_POKEMONS(filteredData);
      return filteredData;
    },
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapMutations(["SET_FILTERED_POKEMONS", "SET_VISIBLE_POKEMONS"]),
  },
};
</script>

<style></style>
