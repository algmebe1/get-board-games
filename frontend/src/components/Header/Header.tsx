import React from 'react'
import { Header, Image } from 'react-native-elements'

function HeaderApp () {
  return (
      <Header
          centerComponent={<Image
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbbdffec6c8c916bd924758/658x652/ac356046bba2b7e2f9ff4c5429f48e12/GBG-logo-white.png' }}
              style={{ width: 40, height: 40 }}
                           />}
          containerStyle={{
            backgroundColor: 'lightblue'
          }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          rightComponent={{ icon: 'person', color: '#fff' }}
      />
  )
}

export default HeaderApp
