import React from 'react';
import { History } from 'history';
import {withRouter} from 'react-router-dom'

import { authType } from '../../types/auth';
import {setInputParams, createRenderedInputs} from '../hocHelpers/inputHelper';
import Button from '../Button/Button';
import InstaService from '../../services/InstaService/InstaService';
import withInstaService from '../hoc/withInstaService';

import './Auth.css';

interface AuthProps {
  setUser: any;
  checkUser: any;
  history: History;
}

type AuthState = {
  isFormValid: boolean;
  formControls: authType;
}

class Auth extends React.Component<AuthProps, AuthState> {

  state = {
    isFormValid: false,
    formControls: {
      name: {
          value: '',
          type: 'text',
          label: 'Username',
          errorMessage: 'Invalid Username',
          valid: false,
          touched: false,
          validation: {
              required: true
          }
      },
      password: {
          value: '',
          type: 'password',
          label: 'Password',
          errorMessage: 'Invalid password',
          valid: false,
          touched: false,
          validation: {
              required: true,
              minLength: 6
          }
      }
    }
  }   

  submitHandler = (event: any) => {
    event.preventDefault();
  }

  changeHandler = (value: string, controlName: string) => {
    const formControls = { ...this.state.formControls };
    const obj = setInputParams(formControls, controlName, value);

    this.setState({
        isFormValid: obj.isFormValid,
        formControls: obj.formControls
    });
  }

  loginHandler = (e: any) => {
    const {name, password} = this.state.formControls;
    this.props.checkUser(name.value, password.value)
      .then((valid: boolean) => {
        if (!valid) {
          this.setState({
            isFormValid: false
          })
        }
        else {
          this.props.history.push('/feed/')
          this.props.setUser(name.value);
        }
      });
  }

  registerHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    const {formControls, isFormValid} = this.state;
    return (
      <div className="auth">
        <div>
          <h1>Auth</h1>
          <div className="auth-form" onSubmit={this.submitHandler}>

            {createRenderedInputs(formControls, this.changeHandler)}

            <div className="form-group">
              <Button types="btn-success" 
                  disabled={!isFormValid}
                  onClick={this.loginHandler}>
                  Log in
              </Button>

              <Button types="btn-info" 
                  onClick={this.registerHandler}
                  disabled={true}>
                  Sign up
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
};

const mapFunction = (instaService: InstaService) => {
  return {
    checkUser: instaService.checkUser
  };
}

export default withRouter(withInstaService(mapFunction)(Auth));