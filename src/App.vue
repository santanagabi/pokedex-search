<template>
  <div>
    <input placeholder="Buscar nome do Pokemon" @input="filterPokemons"/>
    <button>Buscar Nome</button>

    <div>
      <ul>
        <li v-for="pokemon in getPokemons" :key="pokemon.id">
          {{ pokemon.id }} - {{ pokemon.name }}
          <img :src="pokemon.srcImg" alt="Imagem do Pokémon"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
    ...mapGetters(['getPokemons'])
  },

  methods: {
    ...mapActions(['fetchPokemons']),

    filterPokemons() {
      console.log('filtrando pokemons');
    }
  }
};
</script>

<style></style>
