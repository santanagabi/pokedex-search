<template>
  <div>
    <input
      placeholder="Buscar nome do Pokemon"
      v-model="searchedPokemon"
      @input="onInput"
      class="pokemon-search-input"
    />
  </div>
</template>

<script>
export default {
  name: "PokemonSearchInput",

  data() {
    return {
      // Guarda o valor no input
      searchedPokemon: "",
    };
  },

  methods: {
    onInput() {
      this.$emit("input-change", this.searchedPokemon);
    },
  },
};
</script>

<style>
  .pokemon-search-input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #f2c94c;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #ffcc00; 
    color: #333; 
  }

  .pokemon-search-input::placeholder {
    color: #666; 
  }

  .pokemon-search-input:focus {
    outline: none;
    border-color: #f2c94c; 
  }
  
</style>

