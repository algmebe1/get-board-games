import React from 'react'
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native'
import BackButton from '../Header/BackButton/BackButton'
import HomeButton from '../Header/HomeButton/HomeButton'

function List ({ navigation }) {
  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <Text>
              List works!
          </Text>
          <View>
              <Button
                  onPress={() => navigation.navigate('GameDetail')}
                  title="Go to GameDetail"
              />
          </View>
          <View style={styles.navButtons}>
              <BackButton />
              <HomeButton />
          </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({

  navButtons: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  }
})

export default List
