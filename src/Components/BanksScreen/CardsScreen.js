import React, { Component } from 'react';
import ContainerView from '../Common/ContainerView';

import Header from '../Common/Header';
import WideItemButton from '../Common/WideItemButton';
import CardsList from './CardsList';
import SimpleModal from '../Common/SimpleModal';

class CardsScreen extends Component {
  render() {

    return (
      <ContainerView>
        {/* Modal component */}
        <SimpleModal/>
        {/* Form */}
        <WideItemButton
          label="Save card number "
          navigateTo="BanksForms"
          iconColor="#d81b60"
          iconName="md-save"
        />
        <Header title="Your credit cards:"/>
        {/* Cards list */}
        <CardsList/>
      </ContainerView>
    );
  }
}

export default CardsScreen;
