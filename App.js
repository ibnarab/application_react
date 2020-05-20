import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet} from 'react-native';
import Ajout from './Components/Ajout';
import Suppression from './Components/Suppression';
import Filtre from './Components/Filtre';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gestion de reunion">
          <Stack.Screen name="Ajout d'une reunion" component={Ajout} />
          <Stack.Screen name="Suppression d'une reunion" component={Suppression} />
          <Stack.Screen name="Filtre" component={Filtre} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});


// import React from 'react';
// import Ajout from './Components/Ajout'
//
// export default class App extends React.Component {
//   render(){
//     return (
//       <Ajout/>
//     )
//   }
//
// }
