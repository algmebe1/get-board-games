import React from 'react'
import HeaderApp from './src/components/Header/Header'
import Loading from './src/components/Loading/Loading'
import Login from './src/components/Login/Login'
import Application from './src/components/Application/Application'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import configureStore from './src/redux/configureStore'

import { firebaseConfig } from './src/config'
import firebase from 'firebase'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const store = configureStore({ gameReducer: { gameItem: {}, gameCollection: [] } })
const Stack = createStackNavigator()

function App () {
  return (
      <ReduxProvider store={store}>
          <HeaderApp />
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{ headerShown: false }}
              >
                  <Stack.Screen
                      component={Loading}
                      name='Loading'
                  />
                  <Stack.Screen
                      component={Login}
                      name='Login'
                  />
                  <Stack.Screen
                      component={Application}
                      name='Application'
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </ReduxProvider>
  )
}

export default App
