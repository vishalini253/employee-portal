import React from 'react'
import { connect } from 'react-redux'

import { userActions, validateActions } from '../../_actions'
import { errorMessages } from '../../../static'
import './style.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        }
    }

    handleChange = event => {
        event.preventDefault();

        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleEmailBlur = event => {
        event.preventDefault();
        const { value } = event.target
        this.props.validateEmail(value)
    }

    handlePasswordBlur = event => {
        event.preventDefault();
        const { value } = event.target
        this.props.validatePassword(value)
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { username, password } = this.state;
        const { isLoginSuccess, isValidEmail=true, isValidPassword=true } = this.props
        return (
            <div className="login-page-container">
                <h2 className="login-title">Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="username">Username*</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} onBlur={this.handleEmailBlur} />
                        {!isValidEmail &&
                            <div className="help-block">{errorMessages.email}</div>
                        }
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password*</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} onBlur={this.handlePasswordBlur} />
                        {!isValidPassword &&
                            <div className="help-block">{errorMessages.password}</div>
                        }
                    </div>
                    <div className={'form-group'}>
                        <label > </label>
                        <button className="btn btn-primary">Login</button>
                    </div>
                    {!isLoginSuccess && <span className="error-message"> {errorMessages.invalidCredential} </span>}
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { isLoginSuccess } = state.authentication
    const { isValidEmail, isValidPassword } = state.validate
    return { isLoginSuccess, isValidEmail, isValidPassword }
}

const actionCreators = {
    login: userActions.login,
    validateEmail: validateActions.validateEmail,
    validatePassword: validateActions.validatePassword
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
export { connectedLoginPage as LoginPage };