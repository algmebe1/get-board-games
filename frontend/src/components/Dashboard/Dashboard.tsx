import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Dashboard () {
  return (
      <View style={styles.body}>

          <Text>
              Dashboard works!
          </Text>

      </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1
  }
})
