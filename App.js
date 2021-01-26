import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OpeningScreen from './src/screens/openingScreen';
import LogIn from './src/screens/logIn';
import Notes from './src/screens/Notes';
import Search from './src/screens/search';
import OpenBook from './src/containers/openBookScreen';
import Pdf from './src/screens/pdf';
import IndividualNotes from './src/containers/individualNotes';
const RootStack = createStackNavigator(
  {
    Home: {screen: OpeningScreen},
    Profile: {screen: LogIn},
    Notes: {screen: Notes},
    Search: {screen: Search},
    OpenBook: {screen: OpenBook},
    Pdf: {screen: Pdf},
    IndividualNotes: {screen: IndividualNotes},
  },
  {initialRouteName: 'Home', headerMode: 'none'},
);
// export default class App extends Component {
//   render() {
//     return <RootStack />;
//   }
// }
export default createAppContainer(RootStack);
