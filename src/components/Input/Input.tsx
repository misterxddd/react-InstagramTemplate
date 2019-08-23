import React from 'react';

import './Input.css';

type InputProps = {
  value: string;
  type: string;
  label: string;
  errorMessage: string;
  valid: boolean;
  touched: boolean;
  shouldValidate: boolean
  onChange: (arg0: any) => any;
}

function isInvalid(valid: boolean, touched: boolean, shouldValidate: boolean) {
  return !valid && shouldValidate && touched;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    type, label, value, onChange, errorMessage,
    valid, touched, shouldValidate
  } = props;

  const inputType = type ? type : 'text';
  const error = isInvalid(valid, touched, shouldValidate);
  const cls = [
      'input',
      error ? 'invalid has-danger' : ''
  ];
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
      <div className={cls.join(' ')}>
          <label className='form-control-label' htmlFor={htmlFor}>{label}</label>

          <input 
              type={inputType}
              id={htmlFor}
              value={value}
              onChange={onChange}
          />

          {
              error ? <span>{errorMessage || 'Sas Error'}</span> : null
          }
      </div>
  )
}

export default Input;