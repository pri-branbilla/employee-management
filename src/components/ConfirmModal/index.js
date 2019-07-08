/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Modal } from 'react-native'
import { CardSection, Button } from 'generic-app-components'
import styles from './styles'

const ConfirmModal = ({
  modalText,
  onAccept,
  onDecline,
  modalVisible,
}) => (
  <Modal
    animationType="slide"
    transparent
    visible={modalVisible}
    onRequestClose={() => {}}
  >
    <View style={styles.containerStyle}>
      <View style={styles.cardStyle}>
        <CardSection containerStyle={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{modalText}</Text>
        </CardSection>
        <View style={styles.buttonsContainer}>
          <CardSection>
            <Button
              text="Yes"
              onPress={onAccept}
              textStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
            />
          </CardSection>
          <CardSection>
            <Button
              text="No"
              onPress={onDecline}
              textStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
            />
          </CardSection>
        </View>
      </View>
    </View>
  </Modal>
)

ConfirmModal.propTypes = {
  modalText: PropTypes.string,
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
  modalVisible: PropTypes.bool,
}

ConfirmModal.defaultProps = {
  modalText: '',
  modalVisible: false,
  onAccept: () => {},
  onDecline: () => {},
}

export default ConfirmModal
