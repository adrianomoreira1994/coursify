import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useFetch } from '../../hooks/useFetch';

import { Media } from '../../models/media';
import { Post } from '../../models/posts';

import { styles } from './styles';

type PostItemProps = {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  const { data: midia } = useFetch<Media>(`media/${post.featured_media}`);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => navigation.navigate('PostPage', {
        post: post,
        midia: midia
      })}
    >
      <View>
        <Image
          style={{ height: 96, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden' }}
          source={{ uri: midia?.source_url }}
          resizeMode='contain'
        />

        <View style={styles.containerDescription}>
          <Text ellipsizeMode='tail' numberOfLines={2} style={styles.postLabel}>{post.title.rendered}</Text>
          <Text ellipsizeMode='tail' numberOfLines={4} style={styles.descriptionLabel}>{post.excerpt.rendered}</Text>


          <Text style={styles.buttonMoreLabel}>Leia mais</Text>

        </View>
      </View>
    </TouchableOpacity >
  )
}