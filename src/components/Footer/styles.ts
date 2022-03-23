import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.green_100,
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  descriptionCourse: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20
  },
  button: {
    width: 250,
    backgroundColor: theme.yellow_500,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel: {
    color: '#FFF'
  }
})