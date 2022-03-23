import {
  StyleSheet,
  Platform
} from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    // paddingBottom: Platform.OS === 'ios' ? 120 : 60
  },
  containerOrderItems: {
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  orderItemLabel: {
    color: theme.gray_700,
    fontSize: 18,
    flex: 2
  },
  containerPicker: {
    backgroundColor: "#FFF",
    borderColor: theme.gray_700,
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
  }
})