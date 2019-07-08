/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Picker, Text } from 'react-native'
import {
  Card, CardSection, Input, Button,
} from 'generic-app-components'
import styles from './styles'

const EmployeeForm = ({
  name,
  phone,
  shift,
  edit,
  onChangeEmail,
  onChangePassword,
  onChangeShift,
  onSubmit,
  onText,
  onFire,
}) => (
  <Card containerStyle={styles.container}>
    <CardSection>
      <Input
        label="Name"
        placeholder="Name"
        onChangeText={onChangeEmail}
        value={name}
      />
    </CardSection>
    <CardSection>
      <Input
        label="Phone"
        placeholder="(XX) XXXXX-XXXX"
        onChangeText={onChangePassword}
        value={phone}
      />
    </CardSection>
    <CardSection containerStyle={styles.shiftCardSection}>
      <Text style={styles.shiftTitle}>Select shift</Text>
      <Picker
        selectedValue={shift}
        onValueChange={onChangeShift}
      >
        <Picker.Item label="Monday" value="monday" />
        <Picker.Item label="Tuesday" value="tuesday" />
        <Picker.Item label="Wednesday" value="wednesday" />
        <Picker.Item label="Thursday" value="thursday" />
        <Picker.Item label="Friday" value="friday" />
      </Picker>
    </CardSection>
    <CardSection>
      <Button
        onPress={onSubmit}
        text="Save"
        textStyle={styles.buttonText}
        buttonStyle={styles.buttonStyle}
      />
    </CardSection>
    { edit ? (
      <Fragment>
        <CardSection>
          <Button
            onPress={onText}
            text="Text"
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonStyle}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={onFire}
            text="Fire"
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonStyle}
          />
        </CardSection>
      </Fragment>
    ) : null
    }
  </Card>
)

EmployeeForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  edit: PropTypes.bool,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeShift: PropTypes.func,
  onSubmit: PropTypes.func,
  onText: PropTypes.func,
  onFire: PropTypes.func,
}

EmployeeForm.defaultProps = {
  name: '',
  phone: '',
  shift: '',
  edit: false,
  onChangeEmail: () => {},
  onChangePassword: () => {},
  onChangeShift: () => {},
  onSubmit: () => {},
  onText: () => {},
  onFire: () => {},
}

export default EmployeeForm
