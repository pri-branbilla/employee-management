/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// eslint-disable-next-line import/named
import { employeeFetch } from '../../actions'
import { EmployeeList } from '../../components'

class EmployeesList extends Component {
  componentDidMount = () => {
    this.props.employeeFetch()
  }

  render() {
    const { employees } = this.props
    return (
      <EmployeeList
        employees={employees}
      />
    )
  }
}

EmployeesList.propTypes = {
  employeeFetch: PropTypes.func,
  employees: PropTypes.array,
}

EmployeesList.defaultProps = {
  employeeFetch: () => {},
  employees: [],
}

const mapStateToProps = state => ({
  employees: state.employees.employees,
})

export default connect(mapStateToProps, { employeeFetch })(EmployeesList)
