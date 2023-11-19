<template>
  <div>
    <div class="header">
      <h2 class="pokemon-counter">
        🌟 Pokemons visíveis: {{ this.getVisiblePokemons }} 🌟
      </h2>

      <div class="search-reset-container">
        <PokemonSearchInput @input-change="handleSearchInputChange" />
        <button @click="resetApp" class="reset-button">Reiniciar</button>
      </div>
    </div>

    <div class="pokemon-list-container">
      <PokemonList :pokemons="visiblePokemons" />
    </div>

    <div class="show-more-less-buttons">
      <button @click="showMorePokemons" class="action-button">Mostrar Mais</button>
      <button @click="showLessPokemons" class="action-button">Mostrar Menos</button>
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

    visiblePokemons() {
      const filteredData = this.getPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.filteredSearch.toLowerCase())
      );

      return filteredData.slice(0, this.getVisiblePokemons);
    },
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapMutations(["SET_VISIBLE_POKEMONS"]),

    resetApp() {
      this.fetchPokemons();
    },

    handleSearchInputChange(value) {
      this.filteredSearch = value;
    },

    showMorePokemons() {
      const newVisiblePokemon = this.getVisiblePokemons + 10;
      this.SET_VISIBLE_POKEMONS(newVisiblePokemon);
    },

    showLessPokemons() {
      const newVisiblePokemon = this.getVisiblePokemons - 10;
      if (newVisiblePokemon >= 10) {
        this.SET_VISIBLE_POKEMONS(newVisiblePokemon);
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-counter {
  background: #c62828;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.search-reset-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.reset-button {
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 15px;
}

.reset-button:hover {
  background-color: #1565c0;
}

.pokemon-list-container {
  display: flex;
  justify-content: center;
}

.show-more-less-buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.action-button {
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.action-button:hover {
  background-color: #45a049;
}
</style>
