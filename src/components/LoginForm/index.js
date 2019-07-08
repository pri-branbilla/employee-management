/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import {
  Card, CardSection, Input, Button, Spinner,
} from 'generic-app-components'
import styles from './styles'

class LoginForm extends Component {
  renderError = () => {
    const { error } = this.props
    return error ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          {error}
        </Text>
      </View>
    ) : null
  }

  renderButton = () => {
    const { loading, onButtonPress } = this.props
    return loading ? (
      <Spinner size="large" />
    ) : (
      <Button
        onPress={onButtonPress}
        text="Login"
        textStyle={styles.buttonText}
        buttonStyle={styles.buttonStyle}
      />
    )
  }

  render() {
    const {
      email,
      password,
      onEmailChange,
      onPasswordChange,
    } = this.props
    return (
      <Card containerStyle={styles.container}>
        <View style={styles.insideWrapper}>
          <CardSection>
            <Input
              label="Email"
              onChangeText={onEmailChange}
              value={email}
              placeholder="email@test.com"
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              password
              placeholder="password"
              onChangeText={onPasswordChange}
              value={password}
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </View>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onButtonPress: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
}

LoginForm.defaultProps = {
  onEmailChange: () => {},
  onPasswordChange: () => {},
  onButtonPress: () => {},
  email: '',
  password: '',
  error: '',
  loading: false,
}

export default LoginForm
