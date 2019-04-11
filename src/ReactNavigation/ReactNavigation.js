import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// Components
import MenuScreen from '../Components/MenuScreen/MenuScreen';
import NotesScreen from '../Components/NotesScreen/NotesScreen';
import BanksScreen from '../Components/BanksScreen/BanksScreen';
import BanksForms from '../Components/BanksScreen/BanksForms/BanksForms';

// Main application navigation stack
const AppNavigator = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    Notes: {
      screen: NotesScreen,
      navigationOptions: {
        title: 'Notes'
      }
    },
    Banks: {
      screen: BanksScreen,
      navigationOptions: {
        title: 'Banks'
      }
    },
    BanksForms: {
      screen: BanksForms,
      navigationOptions: {
        title: 'Credit card info'
      }
    }
  },
  {
    initialRouteName: 'Menu',
    // Default navigation options for header customization
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#d81b60'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      }
    }
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
