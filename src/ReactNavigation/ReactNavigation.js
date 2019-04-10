import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// Components
import MenuScreen from '../Components/MenuScreen/MenuScreen';
import NotesScreen from '../Components/NotesScreen/NotesScreen';
import BanksScreen from '../Components/BanksScreen/BanksScreen';

// Main application navigation stack
const AppNavigator = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen
    },
    Notes: {
      screen: NotesScreen
    },
    Banks: {
      screen: BanksScreen
    }
  },
  {
    initialRouteName: 'Menu'
  }
);

// Create react-navigation container
const AppContainer = createAppContainer(AppNavigator);

class ReactNavigation extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

export default ReactNavigation;
