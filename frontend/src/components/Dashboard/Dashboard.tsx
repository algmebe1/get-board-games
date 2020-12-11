import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { props } from '../../interfaces/interfaces'

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1
  }
})

function Dashboard ({ userItem }: props) {
  useEffect(() => {
    console.log('Useeffect:', userItem)
  }, [userItem])
  return (
      <View style={styles.body}>

          <Text>
              {userItem?.name}
          </Text>

      </View>
  )
}

function mapStateToProps (state: any) {
  console.log('\n\nMAPSTATETOPROPS: ')
  console.log(state)

  return {
    userItem: state?.userReducer?.userObject
  }
}

export default connect(mapStateToProps)(Dashboard)
