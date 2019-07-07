/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'
import {
  Card, CardSection, Input, Button,
} from 'generic-app-components'
// eslint-disable-next-line import/named
import { employeeUpdate, employeeCreate } from '../../actions'
import styles from './styles'

class EmployeeCreate extends Component {
  updateName = text => this.props.employeeUpdate({
    prop: 'name',
    value: text,
  })

  updatePhone = text => this.props.employeeUpdate({
    prop: 'phone',
    value: text,
  })

  updateShift = text => this.props.employeeUpdate({
    prop: 'shift',
    value: text,
  })

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    return this.props.employeeCreate({ name, phone, shift })
  }

  render() {
    const { name, phone, shift } = this.props
    return (
      <Card containerStyle={styles.container}>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name"
            onChangeText={this.updateName}
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="(XX) XXXXX-XXXX"
            onChangeText={this.updatePhone}
            value={phone}
          />
        </CardSection>
        <CardSection containerStyle={styles.shiftCardSection}>
          <Text style={styles.shiftTitle}>Select shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={this.updateShift}
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
            onPress={this.onButtonPress}
            text="Save"
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonStyle}
          />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func,
  employeeCreate: PropTypes.func,
}

EmployeeCreate.defaultProps = {
  name: '',
  phone: '',
  shift: '',
  employeeUpdate: () => {},
  employeeCreate: () => {},
}

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeCreate,
  }
)(EmployeeCreate)
