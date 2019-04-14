import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextInputSimple from '../../Common/TextInputSimple';
import TextInputArea from '../../Common/TextInoutArea';
import SubmitButton from '../../Common/SubmitButton';
import { postCard } from '../../../Redux/actions';
import Label from '../../Common/Label';
import ContainerView from '../../Common/ContainerView';

class BanksForms extends Component {

  /**
   * Submit the credit card form
   * @param values
   * @return *
   */
  submitForm = values => {
    this.props.sendCardData(values);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <ContainerView>
        {/* Two field form. TODO refactor in field with label */}
        <Label label="Card number:"/>
        <Field name="number" component={TextInputSimple}/>
        <Label label="Card info:"/>
        <Field name="info" component={TextInputArea}/>
        {/* Submit button component */}
        <SubmitButton
          buttonLabel="Submit"
          handleSubmit={handleSubmit(this.submitForm)}
          onPress={() => this.props.navigation.push('CardsScreen')}
        />
      </ContainerView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendCardData: data => dispatch(postCard(data))
});

BanksForms = reduxForm({
  form: 'credit-card'
})(BanksForms);

BanksForms = connect(null, mapDispatchToProps)(BanksForms);

export default BanksForms;
