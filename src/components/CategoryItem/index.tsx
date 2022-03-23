import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Category } from '../../models/category';
import { Post } from '../../models/posts';
import { api } from '../../services/api';
import PostItem from '../PostItem';

import { styles } from './styles';

type CategoryItemProps = {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    api.get<Post[]>(`posts?categories=${category.id}`)
      .then(response => setPosts(response.data));
  }, []);


  return (
    <View style={styles.containerItem}>
      <Text style={styles.categoryLabel}>{category.name}</Text>

      <FlatList
        horizontal
        data={posts}
        keyExtractor={(post) => String(post.id)}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  )
}