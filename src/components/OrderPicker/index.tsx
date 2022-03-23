import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useCourse } from '../../hooks/course';

import { styles } from './styles';

export default function OrderPicker({ selectedLanguage, handleChangeValueOrder }) {
  return (
    <View style={styles.containerPicker}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={handleChangeValueOrder}>
        <Picker.Item label="Padrão" value="padrao" />
        <Picker.Item label="A-Z" value="asc" />
        <Picker.Item label="Z-A" value="desc" />
        <Picker.Item label="Mais visualizados" value="mais_visualizado" />
        <Picker.Item label="Menos visualizados" value="menos_visualizado" />
      </Picker>
    </View>
  );
}
