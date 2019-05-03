import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// Components
import NavigationService from './NavigationService';
import MenuScreen from '../Components/MenuScreen/MenuScreen';
import NotesScreen from '../Components/NotesScreen/NotesScreen';
import BanksScreen from '../Components/BanksScreen/BanksScreen';
import CardsScreen from '../Components/BanksScreen/CardsScreen';
import CardForm from '../Components/BanksScreen/Componenets/CardForm';

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
      screen: CardForm,
      navigationOptions: {
        title: 'Credit card form'
      }
    },
    CardsScreen: {
      screen: CardsScreen,
      navigationOptions: {
        title: 'Credit cards'
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
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default ReactNavigation;
