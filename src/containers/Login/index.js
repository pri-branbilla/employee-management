/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../../actions'
import { LoginForm } from '../../components'

class Login extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  render() {
    const {
      email,
      password,
      error,
      loading,
    } = this.props
    return (
      <LoginForm
        email={email}
        password={password}
        error={error}
        loading={loading}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        onButtonPress={this.onButtonPress}
      />
    )
  }
}

Login.propTypes = {
  emailChanged: PropTypes.func,
  passwordChanged: PropTypes.func,
  loginUser: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
}

Login.defaultProps = {
  emailChanged: () => {},
  passwordChanged: () => {},
  loginUser: () => {},
  email: '',
  password: '',
  error: '',
  loading: false,
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
})

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
  }
)(Login)
