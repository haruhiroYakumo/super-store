import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextInputSimple from '../../Common/TextInputSimple';
import TextInputArea from '../../Common/TextInoutArea';
import SubmitButton from '../../Common/SubmitButton';
import { postCard } from '../../../Redux/actions';
import Label from '../../Common/Label';
import ContainerView from '../../Common/ContainerView';

class CardForm extends Component {

  /**
   * Submit the credit card form
   * @param values
   * @return *
   */
  submitForm = values => {
    const { params: action } = this.props.navigation.state;
    console.log('action payload', action, values);
    this.props.sendCardData(values);
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
  sendCardData: data => dispatch(postCard(data))
});

CardForm = reduxForm({
  form: 'credit-card',
  enableReinitialize: true
})(CardForm);

CardForm = connect(null, mapDispatchToProps)(CardForm);

export default CardForm;
