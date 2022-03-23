import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, } from 'react-native';

import CategoryItem from '../../components/CategoryItem';
import Footer from '../../components/Footer';

import { theme } from '../../theme';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { Category } from '../../models/category';
import { api } from '../../services/api';
import { Post } from '../../models/posts';

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    api.get('categories').then(response =>
      setCategories(response.data))
      .finally(() => setLoading(false));
  }, []);

  const handleChangeValueOrder = async (itemValue, _) => {
    setSelectedLanguage(itemValue);
    const cat = categories;

    if (itemValue === 'desc') {
      const ordercat = cat.sort(function (a, b) {
        return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
      });

      setCategories(ordercat);
    } else {
      const ordercat = cat.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });

      setCategories(ordercat);
    }
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator color={theme.green_100} size={60} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          paddingVertical: 10
        }}
        showsVerticalScrollIndicator
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CategoryItem category={item} />}
        ListHeaderComponent={() => (
          <View style={styles.containerOrderItems}>
            <Text style={styles.orderItemLabel}>Ordenar Por:</Text>

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
          </View>
        )}
        ListFooterComponent={() => <Footer />}
      />
    </View>
  );
}