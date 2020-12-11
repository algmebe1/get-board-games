import React, { useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { props } from '../../interfaces/interfaces'
import firebase from 'firebase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import * as RootNavigation from '../Application/RootNavigation.js'
import { sendUser } from '../../redux/actions/userActions'

function HeaderApp ({ userItem, dispatch }: props) {
  return (
      <View style={styles.header}>
          <View style={styles.headerItems}>

              <Image
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbbdffec6c8c916bd924758/658x652/89ee36969caa01ee422982a49f59fc06/GBG-logo-white.png' }}
                  style={styles.logo}
              />
              {userItem?.id
                ? (<View style={styles.userOptions}>
                    <TouchableOpacity
                        onPress={() => RootNavigation.navigate('Profile', { userItem })}
                    >
                        <Image
                            source={{ uri: userItem?.photoUrl }}
                            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      firebase.auth().signOut()
                      dispatch(sendUser(null))
                      RootNavigation.navigate('LoginWithGoogle')
                    }}
                    >
                        <FontAwesome5
                            name="power-off"
                            size={25}
                            style={{ color: 'white' }}
                        />
                    </TouchableOpacity>
                   </View>) : null}
          </View>

      </View>
  )
}

function mapStateToProps (state: any) {
  return {
    userItem: state?.userReducer?.userObject
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 115,
    backgroundColor: 'lightblue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
  },

  headerItems: {
    display: 'flex',
    width: '95%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },

  logo: {
    marginLeft: 10,
    width: 60,
    height: 60
  },

  userOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export default connect(mapStateToProps)(HeaderApp)
