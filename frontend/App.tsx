import React from 'react'
import { View } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import HeaderApp from './src/components/Header/Header'
import GameDetail from './src/components/GameDetail/GameDetail'
import configureStore from './src/redux/configureStore'
import FooterNav from './src/components/FooterNav/FooterNav'

const store = configureStore({ gameReducer: { gameItem: {} } })

function App () {
  return (
      <ReduxProvider store={store}>
          <NavigationContainer>
              <HeaderApp />
              <View>
                  <GameDetail />
              </View>
              <FooterNav />
          </NavigationContainer>
      </ReduxProvider>
  )
}

export default App
