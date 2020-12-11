import React from 'react'
import { Text, View } from 'react-native'

function Profile ({ route: { params: { userItem } } }: props) {
  return (
      <View>
          <Text>
              Hello
              {' '}
              {userItem.name}
          </Text>
      </View>
  )
}

export default Profile
