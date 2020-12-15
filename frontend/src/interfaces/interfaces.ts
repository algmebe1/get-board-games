export interface gameItem {
  name: string,
  images: images,
}

export interface images {
  thumb: string,
  small: string,
  medium: string,
  large: string,
  original: string,
}

export interface props {
  gameItem?: gameItem,
  gameCollection?: Object[]
  dispatch: Function,
  navigation: Object,
  user: user,
  userObject: userObject
}

export interface userObject {
  _id: string,
  id: string,
  name: string,
  photoUrl: string,
  username: string,
  location: string,
  bio: string,
  favourites: Object[]
}

export interface user {
  id: string
}
