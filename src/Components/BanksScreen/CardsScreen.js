import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContainerView from '../Common/ContainerView';

import Header from '../Common/Header';
import WideItemButton from '../Common/WideItemButton';
import CardsList from './CardsList';

class CardsScreen extends Component {
  render() {

    return (
      <ContainerView>
        <WideItemButton
          label="Save card number"
          navigateTo="BanksForms"
          iconColor="#d81b60"
          iconName="md-save"
        />
        <Header title="Your credit cards:"/>
        <CardsList/>
      </ContainerView>
    );
  }
}

export default connect(null, null)(CardsScreen);
