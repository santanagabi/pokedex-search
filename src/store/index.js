import { createStore } from "vuex";

export default createStore({
  state: {
    //  Definir o estado inicial aqui / dado inicial do pokemon
    pokemons: [],
    pokemonsFiltered: [],
    visiblePokemon: 10, // valor inicial dos pokemons que serão exibidos
  },

  mutations: {
    // Alteram o state
    SET_POKEMONS(state, data) {
      state.pokemons = data;
    },

    SET_VISIBLE_POKEMONS(state, data) {
      state.visiblePokemon = data;
    },
  },

  actions: {
    // As actions são responsáveis por chamar as mutations ---> através do commit
    // actions podem ficar responsáveis por chamadas de API, podendo agir de forma assíncrona
    async fetchPokemons({ commit }) {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=100"
        );
        // .json() pois irá receber JSON da API e irá retornar em formato de objeto JavaScript
        const data = await response.json();

        //  Mapeando os dados
        const mappedPokemons = data.results.map((data, index) => ({
          id: index + 1,
          name: data.name,
          srcImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`,
        }));

        commit("SET_POKEMONS", mappedPokemons);
      } catch (error) {
        console.log("Erro", error);
      }
    },
  },

  getters: {
    // Vai acessar o dado dos pokemons
    getPokemons(state) {
      return state.pokemons;
    },

    getVisiblePokemons(state) {
      return state.visiblePokemon;
    },
  },
});
