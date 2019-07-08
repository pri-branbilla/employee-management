/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { Card } from 'generic-app-components'
// eslint-disable-next-line import/named
import ListItem from '../ListItem'

class EmployeeList extends Component {
  renderItem = item => (
    <ListItem text={item.id} />
  )

  render() {
    const { employees } = this.props
    return (
      <Card>
        <FlatList
          data={employees}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </Card>
    )
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array,
}

EmployeeList.defaultProps = {
  employees: [],
}

export default EmployeeList
