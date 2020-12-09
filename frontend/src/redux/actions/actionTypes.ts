interface actionTypesStore {
  LOAD_GAME: string,
  LOAD_GAME_ERROR: string,
  LOAD_ALL_GAMES: string,
  LOAD_ALL_GAMES_ERROR: string,
  SEND_USER: string,
  SEND_USER_ERROR: string
}

const actionTypes: actionTypesStore = {
  LOAD_GAME: 'LOAD_GAME',
  LOAD_GAME_ERROR: 'LOAD_GAME_ERROR',
  LOAD_ALL_GAMES: 'LOAD_ALL_GAMES',
  LOAD_ALL_GAMES_ERROR: 'LOAD_ALL_GAMES_ERROR',
  SEND_USER: 'SEND_USER',
  SEND_USER_ERROR: 'SEND_USER_ERROR'
}

export default actionTypes
