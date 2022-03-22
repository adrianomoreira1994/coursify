import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

const FloatingMenuButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={26} color="white" />
    </View>
  )
}

export default FloatingMenuButton;