<template>
  <div>
    <div class="header">
      <h2 class="pokemon-counter">
        Pokemons visíveis: {{ this.getVisiblePokemons }}
      </h2>

      <PokemonSearchInput @input-change="handleSearchInputChange" />

      <button @click="resetApp">Reiniciar</button>
    </div>

    <div>
      <PokemonList :pokemons="visiblePokemons" />
    </div>

    <div>
      <button @click="showMorePokemons">Mostrar Mais</button>
      <button @click="showLessPokemons">Mostrar Menos</button>
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

      // slice() ===> lista a partir do indice 0, this.getVisiblePokemons retorna o número com o indice de até qual
      // iremos pegar
      // slice irá retornar uma nova lista, sem modificar a lista original
      return filteredData.slice(0, this.getVisiblePokemons); // slice () -> irá limitar o número de pokemons visiveis
    },
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapMutations(["SET_VISIBLE_POKEMONS", "SET_VISIBLE_POKEMONS"]),

    resetApp() {
      // chama uma ação que busca os dados da API e retorna o estado inicial
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
  color: #333;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 35px;
}

.pokemon-counter span {
  font-weight: bold;
  margin-left: 5px;
}
</style>
