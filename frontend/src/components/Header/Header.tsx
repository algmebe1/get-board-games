import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

function HeaderApp () {
  return (
      <View style={styles.header}>

          <Image
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbbdffec6c8c916bd924758/658x652/89ee36969caa01ee422982a49f59fc06/GBG-logo-white.png' }}
              style={styles.logo}
          />

      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 115,
    backgroundColor: 'lightblue',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  logo: {
    marginLeft: 10,
    marginBottom: 10,
    width: 60,
    height: 60
  }

})

export default HeaderApp
