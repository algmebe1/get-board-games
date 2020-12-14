import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { loginGoogle, sendUser, loadUser } from '../../redux/actions/userActions'

function LoginWithGoogle ({ dispatch, user, navigation }: props) {
  function handleLoggingClick () {
    dispatch(loginGoogle())
  }
  useEffect(() => {
    if (user.id) {
      dispatch(sendUser({ id: user?.id, name: user?.name, photoUrl: user?.photoUrl }))
      dispatch(loadUser(user?.id))
      navigation.navigate('Application', { screen: 'Dashboard' })
    } else {
      navigation.navigate('LoginWithGoogle')
    }
  }, [user])

  return (
      <View style={styles.container}>
          <Text>
              Please Sign in to get into the app!
          </Text>
          <View style={{ width: 200, marginTop: 20 }}>
              <Button
                  onPress={handleLoggingClick}
                  title="Sign In With Google"
              />
          </View>
      </View>
  )
}

function mapStateToProps ({ userReducer }: any) {
  return {
    user: userReducer.user
  }
}

export default connect(mapStateToProps)(LoginWithGoogle)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})
