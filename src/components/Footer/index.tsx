import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo-coursify-w.png')}
      />
      <Text style={styles.descriptionCourse}>O Coursify.me é uma plataforma de ensino a distância onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>Quero conhecer a plataforma!</Text>
      </TouchableOpacity>
    </View>
  );
}