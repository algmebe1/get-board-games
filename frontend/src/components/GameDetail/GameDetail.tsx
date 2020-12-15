import React, { useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import BackButton from '../Header/BackButton/BackButton'
import { connect } from 'react-redux'
import { props } from '../../interfaces/interfaces'
import HomeButton from '../Header/HomeButton/HomeButton'
import { addGame } from '../../redux/actions/gameActions'

function GameDetail ({ route: { params: { gameItem } }, userObject, dispatch }: props) {
  const detailScrollRef = useRef(null)

  const isFocused = useIsFocused()
  useEffect(() => {
    detailScrollRef.current.scrollTo({ x: 0, y: 0, animated: false })
  }, [isFocused])

  return (
      <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
          ref={detailScrollRef}
      >
          <View />
          <View style={styles.imageContainer}>
              <Image
                  resizeMode='contain'
                  source={{ uri: gameItem?.images.original }}
                  style={{ width: 300, height: 300 }}
              />
          </View>
          <View style={styles.navButtons}>
              <BackButton />
              <HomeButton />
          </View>
          <View style={styles.info}>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                      {gameItem?.name.toUpperCase()}
                  </Text>

              </View>
              <View style={styles.titleBar} />
              <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>
                      {gameItem?.description_preview}
                  </Text>
                  <View style={styles.gameinfo}>
                      <View style={styles.players}>
                          <FontAwesome5
                              name='users'
                              style={{ fontSize: 20 }}
                          />
                          <Text>
                              {' '}
                              {' '}
                              {' '}
                              {gameItem?.min_players !== gameItem?.max_players ? `${gameItem?.min_players} - ${gameItem?.max_players} players` : `${gameItem?.min_players} players`}
                          </Text>
                      </View>
                      <View style={styles.time}>
                          <FontAwesome5
                              name='clock'
                              style={{ fontSize: 20 }}
                          />
                          <Text>
                              {' '}
                              {' '}
                              {' '}
                              {gameItem?.min_playtime !== gameItem?.max_playtime ? `${gameItem?.min_playtime} - ${gameItem?.max_playtime} min` : `${gameItem.min_players} min`}
                          </Text>
                      </View>
                  </View>
                  <View style={styles.buttonContainer}>
                      <Button
                          icon={
                              <Icon
                                  color="white"
                                  name="plus"
                                  size={15}
                              />
  }
                          onPress={() => {
                            dispatch(addGame(userObject, gameItem))
                          }}
                          style={styles.addButton}

                          title="  Add to favourites"
                      />
                  </View>
              </View>
          </View>
          <View style={{ width: '100%', height: 100 }} />
      </ScrollView>
  )
}

function mapStateToProps ({ gameReducer, userReducer }: any) {
  debugger
  return {
    gameItem: gameReducer.gameObject,
    userObject: userReducer.userObject
  }
}

const styles = StyleSheet.create({
  navButtons: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  gamedetailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  info: {
    backgroundColor: '#dedede',
    width: '90%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20
  },

  titleBar: {
    backgroundColor: 'black',
    width: '90%',
    height: 2,
    marginBottom: 20
  },

  titleContainer: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  gameinfo: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },

  players: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  descriptionContainer: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  description: {

    textAlign: 'left',
    lineHeight: 25
  },

  buttonContainer: {
    marginTop: 20
  },

  addButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export default connect(mapStateToProps)(GameDetail)
