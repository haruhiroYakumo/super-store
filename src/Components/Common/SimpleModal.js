import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { closeModal, deleteCard } from '../../Redux/actions';

class SimpleModal extends Component {
  /**
   * Dispatch close modal
   */
  closeModal = () => {
    this.props.toggleModal();
  };

  /**
   * Confirm modal action
   * @param id
   */
  confirmAction = (id) => {
    this.props.deleteCardRequest(id)
  };

  render() {
    const { modalButton, modalHeader, modalBox, modalContainerStyle, modalItems } = styles;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.modalVisible}
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      >
        <View style={modalContainerStyle}>
          <View style={modalBox}>
            <Text style={modalHeader}>Delete this card?</Text>
            <View style={modalItems}>
              <TouchableOpacity
                onPress={() => this.closeModal()}
              >
                <Text style={modalButton}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.confirmAction(this.props.item)}
              >
                <Text style={modalButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = {
  modalContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  modalBox: {
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalHeader: {
    color: '#d81b60',
    fontSize: 27
  },
  modalButton: {
    fontSize: 20,
    color: '#d81b60',
    paddingLeft: 60,
    paddingRight: 60
  },
  modalItems: {
    flexDirection: 'row'
  }
};

const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible,
  item: state.modal.item
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(closeModal()),
  deleteCardRequest: (data) => dispatch(deleteCard(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);
