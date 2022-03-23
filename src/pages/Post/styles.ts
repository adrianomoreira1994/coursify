import {
  StyleSheet
} from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  contaier: {
    padding: 20,
  },
  title: {
    color: theme.green_100,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  cover: {
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
  },
  htmlContent: {
    color: theme.gray_400,
    fontSize: 16,
    lineHeight: 25
  }
})