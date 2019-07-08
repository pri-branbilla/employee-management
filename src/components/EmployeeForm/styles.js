import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ede6ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  inputStyle: {
    fontSize: 18,
    lineHeight: 23,
  },
  labelStyle: {
    fontSize: 18,
    lineHeight: 23,
  },
  buttonStyle: {
    backgroundColor: '#210073',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
  errorContainer: {
    paddingVertical: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  shiftCardSection: {
    flexDirection: 'column',
    marginBottom: 60,
    minWidth: 250,
  },
  shiftTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default styles
