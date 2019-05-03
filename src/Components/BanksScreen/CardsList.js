import React, { PureComponent } from 'react';
import { SwipeableFlatList, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { requestAllCards } from '../../Redux/actions';
import QuickActionButtons from './Componenets/QuickActionButtons';

// Component for rendering card numbers item
const ListItem = ({ number, info }) => {
  return (
    <TouchableHighlight style={styles.containerListStyle}>
      <View>
        <Text style={styles.listItemText}>
          {number}
        </Text>
        <Text>
          {info}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

class CardsList extends PureComponent {

  componentDidMount() {
    this.props.fetchCards();
  }

  /**
   * Render function for a <FlatList />.
   * Expects a data array.
   * @param item
   */
  renderItemList = ({ item }) => (
    <ListItem
      number={item.number}
      info={item.info}
    />
  );

  /**
   * Extract keys for <FlatList/> component
   * @param item
   * @return {*}
   */
  extractKeys = (item) => item._id;

  /**
   * Render quick action buttons and pass down '_id' prop
   * @param item
   * @return {*}
   */
  renderQuickActions = ({ item }) => {
    return (<QuickActionButtons item={item}/>);
  };

  render() {
    const cardList = this.props.cardsData.cards;

    return (
      <View>
        {cardList ?
          <SwipeableFlatList
            maxSwipeDistance={160}
            data={cardList}
            keyExtractor={this.extractKeys}
            renderItem={this.renderItemList}
            renderQuickActions={this.renderQuickActions}
            bounceFirstRowOnMount
          /> :
          <Text styles={styles.placeholderStyles}>There is no saved cards, or you have bad network connection</Text>
        }
      </View>
    );
  }
}

const styles = {
  containerListStyle: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  listItemText: {
    fontSize: 20,
    color: '#d81b60'
  },
  placeholderStyles: {
    fontSize: 18,
    justifyContent: 'center',
    paddingTop: 10,
    alignItems: 'center'
  }
};

const mapStateToProps = state => ({
  cardsData: state.cards
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(requestAllCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
