import { StyleSheet } from 'react-native'
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  containerDescription: {
    padding: 10,
  },
  postLabel: {
    color: theme.green_100,
    fontWeight: 'bold',
    fontSize: 16,
    width: 200,
  },
  descriptionLabel: {
    marginTop: 10,
    color: '#CCC',
    fontSize: 14,
    width: 200,
  },
  buttonMoreLabel: {
    fontWeight: 'bold',
    color: theme.yellow_500,
    marginTop: 20,
  }
});