import * as Google from 'expo-google-app-auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyAjDxGe07woekOQkj0u3dLsaaCR5Fkdb_4',
  authDomain: 'get-board-games.firebaseapp.com',
  databaseURL: 'https://get-board-games-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'get-board-games',
  storageBucket: 'get-board-games.appspot.com',
  messagingSenderId: '238927777970',
  appId: '1:238927777970:web:af0b636764df7b7e8ab9ab'
}
export default async function signinWithGoogle () {
  try {
    const result = await Google.logInAsync({
      androidClientId: '238927777970-a1kpfmgvun7dl981fb8fbvv5i23h127i.apps.googleusercontent.com',
      iosClientId: '238927777970-1lo7k2piqjb3rgasuaij2h4eiuf17mbi.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    })

    return result
  } catch (error) {
    return (error)
  }
}
