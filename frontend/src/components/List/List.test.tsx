import React from 'react'
import thunk from 'redux-thunk'
import { fireEvent, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import List from './List'

jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('List', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return function ({ children }: any) {
      return (<Provider store={store}>
                {children}
              </Provider>)
    }
  }

  test('should be defined when gameCollection it does not exist', async () => {
    const initialState = { gameReducer: {} }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }
    const gameCollection = null

    const { getByTestId } = render(<List
        gameCollection={gameCollection}
        navigation={navigation}
                                   />, { wrapper })

    expect(getByTestId('games-list')).toBeDefined()
  })

  test('should be rendered without issues', () => {
    const initialState = { gameReducer: { gameArray: [{ id: '1', images: { small: 'abc' } }, { id: '2', images: { small: 'def' } }, { id: '3', images: { small: 'ghi' } }] } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<List
        navigation={navigation}
                                   />, { wrapper })

    expect(getByTestId('games-list')).toBeDefined()
  })

  // THE FOLLOWING TEST MUST BE REVIEWED. DOES NOT WORK PROPERLY.

  test('should be to press button to go to GameDetail component', async () => {
    const initialState = { gameReducer: { gameArray: [{ id: '1', images: { small: 'abc' } }, { id: '2', images: { small: 'def' } }, { id: '3', images: { small: 'ghi' } }] } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<List
        navigation={navigation}
                                   />, { wrapper })

    const button = getByTestId('to-game-detail')
    await fireEvent.press(button)
    expect(button).toBeDefined()
  })
})
