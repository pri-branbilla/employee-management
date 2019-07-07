/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import {
  Card,
} from 'generic-app-components'
// eslint-disable-next-line import/named
import { employeeFetch } from '../../actions'
import ListItem from '../ListItem'
// import styles from './styles'

class EmployeeList extends Component {
  componentDidMount = () => {
    this.props.employeeFetch()
  }

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
  employeeFetch: PropTypes.func,
  employees: PropTypes.array,
}

EmployeeList.defaultProps = {
  employeeFetch: () => {},
  employees: [],
}

const mapStateToProps = state => ({
  employees: state.employees.employees,
})

export default connect(mapStateToProps, { employeeFetch })(EmployeeList)
