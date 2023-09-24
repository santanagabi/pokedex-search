<template>
  <div>
    <input
    placeholder="Buscar nome do Pokemon"
    v-model="searchedPokemon"
    />
    <button>Buscar Nome</button>
    
    <h2 >Pokemons visíveis: {{ this.getVisiblePokemons }}</h2>

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
import { mapActions, mapGetters, mapMutations } from "vuex";

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
    ...mapGetters(["getPokemons", "getVisiblePokemons"]),

    filteredPokemons() {
     const filteredData =  this.getPokemons.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(this.searchedPokemon.toLowerCase())
      )

      this.SET_FILTERED_POKEMONS(filteredData)
      return filteredData
    },

    counterPokemon() {
      const visiblePokemon = this.filteredPokemons.length
      this.SET_VISIBLE_POKEMONS(visiblePokemon)
      return visiblePokemon
    }
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapMutations(["SET_FILTERED_POKEMONS", "SET_VISIBLE_POKEMONS"])
  },
};
</script>

<style></style>
