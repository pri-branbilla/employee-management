import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { CardSection } from 'generic-app-components'
import styles from './styles'

const ListItem = ({ text }) => (
  <CardSection containerStyle={styles.cardSection}>
    <Text style={styles.textStyle}>
      {text}
    </Text>
  </CardSection>
)

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ListItem
