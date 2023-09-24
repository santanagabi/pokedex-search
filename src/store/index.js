import { createStore } from "vuex";

export default createStore({
  state: {
    //  Definir o estado inicial aqui / dado inicial do pokemon
    pokemons: [],
  },

  mutations: {
    // Alteram o state
    SET_POKEMONS(state, data) {
      state.pokemons = data;
    },
  },

  actions: {
    // As actions são responsáveis por chamar as mutations ---> através do commit
    // actions podem ficar responsáveis por chamadas de API, podendo agir de forma assíncrona
    async fetchPokemons({ commit }) {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
        // .json() pois irá receber JSON da API e irá retornar em formato de objeto JavaScript
        const data = await response.json();

        //  Mapeando os dados
        const mappedPokemons = data.results.map((result, index) => ({
          id: index + 1,
          name: result.name,
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
      return state.pokemons
    }
  },
});
