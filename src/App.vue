<template>
  <div>
    <PokemonSearchInput @input-change="handleSearchInputChange" />

    <h2 class="pokemon-counter">
      Pokemons visíveis: {{ this.getVisiblePokemons }}
    </h2>

    <div>
      <PokemonList :pokemons="filteredPokemons" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PokemonList from "./components/PokemonList.vue";
import PokemonSearchInput from "./components/PokemonSearchInput.vue";

export default {
  name: "App",

  data() {
    return {
      filteredSearch: "",
    };
  },

  components: {
    PokemonList,
    PokemonSearchInput,
  },

  mounted() {
    this.fetchPokemons();
  },

  computed: {
    ...mapGetters(["getPokemons", "getVisiblePokemons"]),

    filteredPokemons() {
      const filteredData = this.getPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.filteredSearch.toLowerCase())
      );

      this.SET_FILTERED_POKEMONS(filteredData);
      return filteredData;
    },
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapMutations(["SET_FILTERED_POKEMONS", "SET_VISIBLE_POKEMONS"]),

    handleSearchInputChange(value) {
      this.filteredSearch = value;
    },
  },
};
</script>

<style>
.pokemon-counter {
  background: #c62828;
  color: white; 
  font-size: 24px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
}

.pokemon-counter span {
  font-weight: bold;
  margin-left: 5px;
}
</style>

