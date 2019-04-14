import React, { PureComponent } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { requestAllCards } from '../../Redux/actions';

// Component for rendering card numbers item
const ListItem = ({ number, info }) => {
  return (
    <TouchableOpacity style={styles.containerListStyle}>
      <View>
        <Text style={styles.listItemText}>
          {number}
        </Text>
        <Text>
          {info}
        </Text>
      </View>
    </TouchableOpacity>
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

  render() {
    const cardList = this.props.cardsData.cards;

    return (
      <FlatList
        data={cardList}
        keyExtractor={this.extractKeys}
        renderItem={this.renderItemList}
      />
    );
  }
}

const styles = {
  containerListStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  listItemText: {
    fontSize: 20,
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
