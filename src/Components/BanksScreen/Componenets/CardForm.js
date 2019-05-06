import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextInputSimple from '../../Common/TextInputSimple';
import TextInputArea from '../../Common/TextInputArea';
import SubmitButton from '../../Common/SubmitButton';
import { postCard, updateCard } from '../../../Redux/actions';
import Label from '../../Common/Label';
import ContainerView from '../../Common/ContainerView';

class CardForm extends Component {

  /**
   * Submit the credit card form or update existent data
   * @param values
   * @return *
   */
  submitForm = values => {
    // Check for existence of update marker
    const params = this.props.navigation.state.params ? this.props.navigation.state.params : null;
    // If we've received an 'edit-card' update, use separate route and API request
    if (params.action === 'edit-card') {
      const updatedValues = {
        ...params.data,
        info: values.info,
        number: values.number
      };
      this.props.updateCardData(updatedValues);
    } else {
      this.props.sendCardData(values);
    }
  };

  render() {
    const { handleSubmit } = this.props;
    const { params } = this.props.navigation.state;

    // If we have passed down default data for form input.
    // In other case, empty string.
    const payload = params ? params.data : '';

    return (
      <ContainerView>
        {/* Two field form. TODO refactor in field with label */}
        <Label label="Card number:"/>
        <Field name="number" defaultValue={payload.number} component={TextInputSimple}/>
        <Label label="Card info:"/>
        <Field name="info" defaultValue={payload.info} component={TextInputArea}/>
        {/* Submit button component */}
        <SubmitButton
          buttonLabel="Submit"
          handleSubmit={handleSubmit(this.submitForm)}
        />
      </ContainerView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendCardData: data => dispatch(postCard(data)),
  updateCardData: data => dispatch(updateCard(data))
});

CardForm = reduxForm({
  form: 'credit-card',
  enableReinitialize: true
})(CardForm);

CardForm = connect(null, mapDispatchToProps)(CardForm);

export default CardForm;
