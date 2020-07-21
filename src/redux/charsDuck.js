import axios from "axios";

// constantes
let initialData = {
  fetching: false,
  array: [],
  current: {}
};

let URL = "https://rickandmortyapi.com/api";

let GET_CHARACTERS = "GET_CHARACTERS";
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

//reducer
export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS:
    case GET_CHARACTERS_ERROR:
    case GET_CHARACTERS_SUCCESS:
      return { ...state, array: action.payLoad };
    default:
      return state;
  }
}

//actions or thunk, promises, acciones son las que se comunican con el servidor
//dispatch es quien ejecuta las acciones
//getstate te entrega el store si lo necesitas
export let getCharactersAction = () => (dispatch, getState) => {
  return axios.get(URL).then((res) => {
    dispatch({
      type: GET_CHARACTERS_SUCCESS,
      payLoad: res.data.results
    });
  });
};
