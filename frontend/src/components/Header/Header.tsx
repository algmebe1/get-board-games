import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

function HeaderApp () {
  return (
      <View style={styles.header}>
          <View style={styles.headerItems}>

              <Image
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbbdffec6c8c916bd924758/658x652/89ee36969caa01ee422982a49f59fc06/GBG-logo-white.png' }}
                  style={styles.logo}
              />
              <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                  <FontAwesome5
                      name="power-off"
                      size={20}
                      style={{ color: 'white' }}
                  />
              </TouchableOpacity>
          </View>

      </View>
  )
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
  }

})

export default HeaderApp
