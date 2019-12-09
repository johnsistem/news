import React from 'react';
import { View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/screen/Home';
import Details from './components/screen/Details';

class Inicio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppNavigator/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
   Home : Home , 
    Details : Details
   
  } , 
  { 
    initialRouteName : 'Home' , 
  });

export default createAppContainer(AppNavigator);