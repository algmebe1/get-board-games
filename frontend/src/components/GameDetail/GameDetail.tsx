import React from 'react'
import { StyleSheet, ScrollView, Text, View, Image, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { requestGame } from '../../redux/actions/gameActions'
import { connect } from 'react-redux'
import { props } from '../../interfaces/interfaces'

function GameDetail ({ gameItem, dispatch }: props) {
  const gameId = '6FmFeux5xH'
  if (!gameItem) {
    dispatch(requestGame(gameId))
  }

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.imageContainer}>
              <Image
                  resizeMode='contain'
                  source={{ uri: gameItem?.images.original }}
                  style={{ width: 300, height: 300 }}
              />
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
                              {`${gameItem?.min_players} - ${gameItem?.max_players} players`}
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
                              {`${gameItem?.min_playtime} - ${gameItem?.max_playtime} min`}
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

function mapStateToProps ({ gameReducer }: any) {
  return {
    gameItem: gameReducer.gameObject
  }
}

const styles = StyleSheet.create({

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
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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
