import React, { PureComponent } from 'react';
import { Alert, SwipeableFlatList, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { requestAllCards } from '../../Redux/actions';

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
   * Render two delete and edit action buttons
   * @return {*}
   */
  renderQuickActionButtons = () => {
    const { actionsContainer, actionButton, actionButtonText, actionButtonDestructive, actionButtonDestructiveText, actionButtonEditText } = styles;

    return (
      <View style={actionsContainer}>
        <TouchableHighlight
          style={actionButton}
          onPress={() => Alert.alert('Tips', 'You can do something with this edit action!')}
        >
          <Text style={[actionButtonText, actionButtonEditText]}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[actionButton, actionButtonDestructive]}
          onPress={() => Alert.alert('Tips', 'You can do something with that delete action!')}
        >
          <Text style={[actionButtonText, actionButtonDestructiveText]}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  };

  render() {
    const cardList = this.props.cardsData.cards;

    return (
      <SwipeableFlatList
        maxSwipeDistance={160}
        data={cardList}
        keyExtractor={this.extractKeys}
        renderItem={this.renderItemList}
        renderQuickActions={this.renderQuickActionButtons}
        bounceFirstRowOnMount
      />
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
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  actionButton: {
    padding: 10,
    width: 80
  },
  actionButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  actionButtonDestructive: {
    backgroundColor: '#d81b60'
  },
  actionButtonDestructiveText: {
    color: 'white'
  },
  actionButtonEditText: {
    color: '#d81b60'
  }
};

const mapStateToProps = state => ({
  cardsData: state.cards
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(requestAllCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
