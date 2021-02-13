import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { requestAllGames } from '../../redux/actions/gameActions'

import { propsInterface } from '../../interfaces/interfaces'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  loadingContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rankingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '33%'
  },
  dashboardTitleText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Noteworthy-Bold',
    fontSize: 25,
    backgroundColor: 'rgb(242,242,242)',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  gameItemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'

  },
  gameItemList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '35%'
  },
  rankText: {
    marginRight: 10,
    marginLeft: 20,
    fontFamily: 'AvenirNextCondensed-Medium'
  },
  gameText: {
    marginLeft: 5,
    marginRight: 10,
    fontFamily: 'AvenirNextCondensed-Medium'
  },
  sectionTitleSpacer: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray'
  },
  underWorkingProgress: {
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-10deg' }]
  }
})

function Dashboard ({ gameCollection, userObject, dispatch }: propsInterface) {
  if (!gameCollection || gameCollection?.length === 0) {
    dispatch(requestAllGames())
  }

  const topGames = []
  if (gameCollection) {
    for (let item = 0; item < 6; item++) {
      topGames.push(gameCollection[item])
    }
  }

  return (
      <View style={styles.body}>
        {topGames.length === 0 ? (
          <View style={styles.loadingContainer}>
            <LoadingSpinner />
          </View>
        ) : (
          <View style={styles.rankingContainer}>
            <Text style={styles.dashboardTitleText}>
              Community Favourite Games
            </Text>
            <View style={styles.gameItemsContainer}>
              {topGames.map((gameItem) => (
              <View
                  key={gameItem.id}
                  style={styles.gameItemList}
              >
                <Text style={styles.rankText}>
                  {gameItem.rank}
                  .
                </Text>
              <Image
                  resizeMode='contain'
                  source={{ uri: gameItem?.images.small }}
                  style={{ width: 60, height: 60 }}
              />
              <Text style={styles.gameText}>
    {gameItem.name}
              </Text>
              </View>
              ))}
            </View>
          <View style={{ width: '100%' }}>
            <View style={styles.sectionTitleSpacer} />

            <Text style={styles.dashboardTitleText}>
              Marketplace
            </Text>
            <View style={styles.underWorkingProgress}>
              <FontAwesome5
                  name='tools'
                  style={{ fontSize: 20, paddingRight: 20 }}
              />
              <Text style={{ fontFamily: 'GillSans-Bold' }}>
UNDER WORKING PROGRESS
              </Text>
              <FontAwesome5
                  name='tools'
                  style={{ fontSize: 20, paddingLeft: 20 }}
              />
            </View>
          </View>

          <View style={{ width: '100%' }}>
            <View style={styles.sectionTitleSpacer} />

            <Text style={styles.dashboardTitleText}>
              Forum
            </Text>
            <View style={styles.underWorkingProgress}>
            <FontAwesome5
                name='tools'
                style={{ fontSize: 20, paddingRight: 20 }}
            />
              <Text style={{ fontFamily: 'GillSans-Bold' }}>
UNDER WORKING PROGRESS
              </Text>
              <FontAwesome5
                  name='tools'
                  style={{ fontSize: 20, paddingLeft: 20 }}
              />
            </View>
          </View>

          </View>
        )}
      </View>

  )
}

function mapStateToProps ({ userReducer, gameReducer }: any) {
  return {
    userObject: userReducer?.userObject,
    gameCollection: gameReducer?.gameArray
  }
}

export default connect(mapStateToProps)(Dashboard)
