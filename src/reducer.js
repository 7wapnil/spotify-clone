export const initialState = {
  user: null,
  token: "BQBw6AWdyxZhUeKdGRzcO6PBpVViNfLMReb9zLtm9s1v6O_CNZELv7kcURIsHCPNmCdHZuDYCdClQ-s-OF4eEk5yP045FE2SgNB5ENsKmn5Bbo8JO8gjgv0as9KjfieghSGOpNXygKolPgpz_FavOwtY17EDmsTafTcbB1zkAV4wTs1AjCb57sE",
  playlists: [],
  playing: false,
  item: null
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state;
  }
}

export default reducer;