import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

// Components
import MenuScreen from '../Components/MenuScreen/MenuScreen';
import NotesScreen from '../Components/NotesScreen/NotesScreen';

// Main application navigation stack
const RootStack = createStackNavigator(
  {
    Menu: MenuScreen,
    Notes: NotesScreen
  }
);

// Create react-navigation container
const AppContainer = createAppContainer(RootStack);

const ReactNavigation = () => {
  return (
    <AppContainer/>
  );
};

export default ReactNavigation;
