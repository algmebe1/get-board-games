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
  gameItem: gameItem,
  dispatch: Function,
}
