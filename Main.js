import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/containers/pages/Home'
import { View, Text, Button } from 'react-native'
import Detail from './src/containers/pages/Detail'

const stack = createStackNavigator()

function test ({navigation}) {
  return(
    <View>
      <Text>Hello</Text>
      <Button
        onPress={()=>navigation.navigate('detail')}
        title="Button">
        
        </Button>
    </View>
  )
}

export default Main = () => {
  return(
    <NavigationContainer>
      <stack.Navigator headerMode={false} initialRouteName='test'>
      <stack.Screen name="test" component={test}/>
        <stack.Screen name="home" component={Home}/>
        <stack.Screen name="detail" component={Detail}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}