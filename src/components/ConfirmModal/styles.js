import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#210073',
    marginHorizontal: 2,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
})

export default styles
