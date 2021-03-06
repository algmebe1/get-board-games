/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable camelcase */
export interface gameItemInterface {
  _id: string,
  id: string,
  name: string,
  images: images,
  description_preview: string,
  min_players: number,
  max_players: number,
  min_playtime: number,
  max_playtime: number,
  rank: number,
  status: boolean
}

export interface navigationInterface {
  navigate: Function
}

export interface images {
  thumb: string,
  small: string,
  medium: string,
  large: string,
  original: string,
}

export interface propsInterface {
  gameItem?: gameItemInterface,
  gameCollection?: {
    id: string,
    images: {small: string},
    name: string,
    description_preview: string,
    min_players: number,
    max_players: number,
    min_playtime: number,
    max_playtime: number}[]
  dispatch: Function,
  navigation: navigationInterface,
  user: user,
  userObject: userObjectInterface,
  route: { params: {gameItem: gameItemInterface}}
}

export interface userObjectInterface {
  _id: string,
  id: string,
  name: string,
  photoUrl: string,
  username: string,
  location: string,
  bio: string,
  favourites: {id: string, name: string, rank: number}[]
}

export interface user {
  id: string,
  name: string,
  photoUrl: string
}
