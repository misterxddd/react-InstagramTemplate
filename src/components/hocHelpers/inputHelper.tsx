import React from 'react';
import Input from '../Input/Input';
import is from 'is_js';
import { validationType, authType } from '../../types/auth';

function validate(value: string, validation: validationType = {}) {
  if (!validation) {
      return true;
  }
  else {
    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
        isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }
}

function validateForm(formControls: authType) {
  let isFormValid = true;

  Object.keys(formControls).forEach(name => {
      isFormValid = (formControls as any)[name].valid && isFormValid;
  });

  return isFormValid;
} 

export function setInputParams(formControls: authType, controlName: string, value: string) {
  const control = { ...(formControls as any)[controlName] };

  control.touched = true;
  control.value = value;
  control.valid = validate(control.value, control.validation);

  (formControls as any)[controlName] = control;

  return {
      formControls,
      isFormValid: validateForm(formControls)
  };
}

export function createRenderedInputs(formControls: authType, changeHandler: (a: string, b: string) => any) {
  return Object.keys(formControls).map((controlName, index) => {
      const {
          label, value, valid, touched, validation,
          errorMessage, type
      } = (formControls as any)[controlName];

      const inputType = type ? type : 'text';

      return (
          <React.Fragment key={controlName + index}>
              <Input 
                  label={label}
                  value={value}
                  valid={valid}
                  touched={touched}
                  shouldValidate={!!validation}
                  errorMessage={errorMessage}
                  type={inputType}
                  onChange={
                      ({target: {value}}) => changeHandler(value, controlName)
                  }
              />
          </React.Fragment>
      )
  });
}