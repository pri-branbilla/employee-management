import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Card, CardSection, Input, Button,
} from 'generic-app-components'
import styles from './styles'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state
    return (
      <View style={styles.wrapperContainer}>
        <Card containerStyle={styles.container}>
          <CardSection>
            <Input
              label="Email"
              onChangeText={value => this.setState({ email: value })}
              value={email}
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              onChangeText={value => this.setState({ password: value })}
              value={password}
              labelStyle={styles.labelStyle}
              inputStyle={styles.inputStyle}
            />
          </CardSection>
          <CardSection>
            <Button
              onPress={() => {}}
              text="Login"
              textStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
            />
          </CardSection>
        </Card>
      </View>
    )
  }
}

export { LoginForm }
