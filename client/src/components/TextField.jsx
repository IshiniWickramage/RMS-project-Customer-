// TextField.js

import React from 'react';
import { Form } from 'react-bootstrap';

const TextField = ({ label, disabled, type, className, value, onChange, maxLength, isMandatory }) => {
  return (
    <Form.Group className="mb-3" style={{ display: 'flex' }}>
      <Form.Label style={{ fontFamily: 'Roboto', width: '100px', marginRight: '60px' }}>{label} {isMandatory && '*'}</Form.Label>
      <Form.Control
        disabled={disabled}
        type={type}
        className={className}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        style={{
          height: '30px',
          width: '700px',
          borderRadius: '10px',
          backgroundColor: '#DFD8CF',
          borderColor: '#F0ECE8',
        }}
      />
    </Form.Group>
  );
};

export default TextField;
