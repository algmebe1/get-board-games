import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import * as Google from 'expo-google-app-auth'
import firebase from 'firebase'

function Login () {
  function isUserEqual (googleUser, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true
        }
      }
    }
    return false
  }

  function onSignIn (googleUser) {
    console.log('Google Auth Response', googleUser)
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe()
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        )
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(function () {
          console.log('user signed in')
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
        })
      } else {
        console.log('User already signed-in Firebase.')
      }
    })
  }
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '238927777970-a1kpfmgvun7dl981fb8fbvv5i23h127i.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email']
      })

      if (result.type === 'success') {
        onSignIn(result)
        return result.accessToken
      } else {
        return { cancelled: true }
      }
    } catch (e) {
      return { error: true }
    }
  }

  return (
      <View style={styles.container}>
          <Text>
              Please Sign in to get into the app!
          </Text>
          <View style={{ width: 200, marginTop: 20 }}>
              <Button
                  onPress={() => signInWithGoogleAsync()}
                  title="Sign In With Google"
              />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

export default Login
