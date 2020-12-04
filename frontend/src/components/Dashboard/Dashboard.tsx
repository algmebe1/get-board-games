import React from 'react'
import { Text, View, Button } from 'react-native'

function Dashboard ({ navigation }) {
  return (
      <View>

          <Text>
              Dashboard works!
          </Text>

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
              <Button
                  onPress={() => navigation.navigate('Dashboard')}
                  title="Go to Dashboard"
              />
              <Button
                  onPress={() => navigation.navigate('List')}
                  title="Go to List"
              />
              <Button
                  onPress={() => navigation.navigate('Events')}
                  title="Go to Events"
              />
              <Button
                  onPress={() => navigation.navigate('Forum')}
                  title="Go to Forum"
              />
              <Button
                  onPress={() => navigation.navigate('Marketplace')}
                  title="Go to Marketplace"
              />
          </View>

      </View>
  )
}

export default Dashboard
