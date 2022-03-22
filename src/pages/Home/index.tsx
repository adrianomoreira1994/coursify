import React from 'react';

import { FlatList, Text } from 'react-native';
import { useFetch } from '../../hooks/useFetch';

type CategoryProps = {
  id: number;
  name: string;
  link: string;
}

export default function Home() {
  const { data } = useFetch<CategoryProps[]>("https://blog.coursify.me/wp-json/wp/v2/categories");

  return (
    <FlatList
      renderItem={({ item }) => <Text>{item.name}</Text>}
      data={data}
    />
  );
}