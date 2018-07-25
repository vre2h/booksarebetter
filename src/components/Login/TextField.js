import React from 'react';
import { FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';

const FieldGroup = ({ id, label, touched, error, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel bsClass="login-label">{label}</ControlLabel>
      <FormControl {...props} />
      {touched && error ? (
        <Alert bsStyle="danger" bsClass="login-alert">
          <strong>Holy guacamole!</strong> {error}
        </Alert>
      ) : (
        ''
      )}
    </FormGroup>
  );
};

const renderTextField = ({ input, meta: { touched, error }, ...custom }) => (
  <div>
    <FieldGroup touched={touched} error={error} {...input} {...custom} />
  </div>
);

export default renderTextField;
