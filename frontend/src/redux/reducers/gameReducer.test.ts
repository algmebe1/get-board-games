import actionTypes from '../actions/actionTypes'
import reducer from './gameReducer'

describe('gameReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {}
    )
  })

  test('should handle LOAD_GAME', () => {
    const gameItem = { name: 'Skylab mola!' }
    expect(reducer({}, {
      type: actionTypes.LOAD_GAME,
      gameItem
    })).toEqual(
      {
        gameObject: gameItem
      }
    )
  })

  test('should handle LOAD_GAME_ERROR', () => {
    const error = { error: 'error 404' }
    expect(reducer({}, {
      type: actionTypes.LOAD_GAME_ERROR,
      error
    })).toEqual(
      {
        gameObject: error
      }
    )
  })
})
