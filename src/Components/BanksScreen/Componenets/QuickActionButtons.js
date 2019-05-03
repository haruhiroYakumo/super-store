import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { openModal } from '../../../Redux/actions';

/**
 * Render two action buttons: 'Edit' and 'Delete'
 * @return {*}
 */
class QuickActionButtons extends Component {
  /**
   * Open delete item modal
   * @param id
   */
  openModal = (id) => {
    this.props.toggleModal(id);
  };

  render() {
    // Styles
    const { actionsContainer, actionButton, actionButtonText, actionButtonDestructive, actionButtonDestructiveText, actionButtonEditText } = styles;
    const { navigation } = this.props;

    return (
      <View style={actionsContainer}>
        <TouchableOpacity
          style={actionButton}
          onPress={() => navigation.navigate('BanksForms', {
            data: this.props.item,
            action: 'edit-card'
          })}
        >
          <Text style={[actionButtonText, actionButtonEditText]}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[actionButton, actionButtonDestructive]}
          onPress={() => this.openModal(this.props.item._id)}
        >
          <Text style={[actionButtonText, actionButtonDestructiveText]}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = {
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

const mapDispatchToProps = dispatch => ({
  toggleModal: data => dispatch(openModal(data))
});

export default withNavigation(connect(null, mapDispatchToProps)(QuickActionButtons));
