<template>
  <div class="pokemon-list">
    <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon-list-item">
      <div class="pokemon-info">
        <div class="pokemon-header">
          {{ pokemon.id }} - {{ pokemon.name }}
        </div>
        <img :src="pokemon.srcImg" alt="Imagem do Pokémon" />
      </div>
      <button @click="deletedPokemon(pokemon.id)" class="delete-button">Excluir</button>
    </div>
  </div>
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
      this.deletePokemon(id);
    },
  },
};
</script>

<style>
.pokemon-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Permite que os cards quebrem para a próxima linha se não houver espaço suficiente */
  gap: 20px; /* Espaçamento entre os cards */
}

.pokemon-list-item {
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  max-width: 300px; /* Largura máxima de cada card */
}

.pokemon-list-item:hover {
  height: 350px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

.pokemon-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-header {
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  text-align: center;
}

img {
  max-width: 250px;
  max-height: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}

.delete-button {
  background-color: #c62828;
  color: white;
  font-size: 16px;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #ff3d00;
}
</style>
