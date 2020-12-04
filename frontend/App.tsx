import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import HeaderApp from './src/components/Header/Header'
import Dashboard from './src/components/Dashboard/Dashboard'
import List from './src//components/List/List'
import Events from './src/components/Events/Events'
import Forum from './src/components/Forum/Forum'
import Marketplace from './src/components/Marketplace/Marketplace'
import GameDetail from './src/components/GameDetail/GameDetail'
import configureStore from './src/redux/configureStore'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const store = configureStore({ gameReducer: { gameItem: {} } })
const Tab = createBottomTabNavigator()

function App () {
  return (
      <ReduxProvider store={store}>
          <NavigationContainer>
              <HeaderApp />
              <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName

                      if (route.name === 'Dashboard') {
                        iconName = focused
                          ? 'home'
                          : 'home'
                      } else if (route.name === 'List') {
                        iconName = focused
                          ? 'list'
                          : 'list'
                      } else if (route.name === 'Events') {
                        iconName = focused
                          ? 'trophy'
                          : 'trophy'
                      } else if (route.name === 'Forum') {
                        iconName = focused
                          ? 'comments'
                          : 'comments'
                      } else if (route.name === 'Marketplace') {
                        iconName = focused
                          ? 'store'
                          : 'store'
                      }

                      return (<FontAwesome5
                          color={color}
                          name={iconName}
                          size={size}
                              />)
                    },
                    tabBarButton: [
                      'GameDetail'
                    ].includes(route.name)
                      ? () => {
                          return null
                        } : undefined
                  })}
              >
                  <Tab.Screen
                      component={Dashboard}
                      name="Dashboard"
                  />
                  <Tab.Screen
                      component={List}
                      name="List"
                  />
                  <Tab.Screen
                      component={Events}
                      name="Events"
                  />
                  <Tab.Screen
                      component={Forum}
                      name="Forum"
                  />
                  <Tab.Screen
                      component={Marketplace}
                      name="Marketplace"
                  />
                  <Tab.Screen
                      component={GameDetail}
                      name="GameDetail"
                  />
              </Tab.Navigator>
          </NavigationContainer>
      </ReduxProvider>
  )
}

export default App
