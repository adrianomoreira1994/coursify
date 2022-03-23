import React, { useEffect, useState } from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, ScrollView, Image, ActivityIndicator, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Post } from '../../models/posts';
import { theme } from '../../theme';
import { useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { Media } from '../../models/media';

type ParamList = {
  data: {
    post: Post,
    midia: Media
  };
};


export default function PostPage() {
  const route = useRoute<RouteProp<ParamList, 'data'>>();
  const [post, setPost] = useState<Post>({} as Post);
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(true);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (route?.params != null) {
      setPost({
        id: route.params.post.id,
        categories: route.params.post.categories,
        content: route.params.post.content,
        excerpt: route.params.post.excerpt,
        featured_media: route.params.post.featured_media,
        page_views: route.params.post.page_views,
        status: route.params.post.status,
        title: route.params.post.title
      });

      setCover(route?.params?.midia?.source_url);
      setLoading(false);
    }
  }, [route.params]);

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
    <ScrollView style={styles.contaier}>
      <Text style={styles.title}>{post?.title?.rendered}</Text>

      <Image
        style={styles.cover}
        source={{ uri: cover }}
        resizeMode='contain'
      />

      <RenderHtml
        contentWidth={width}
        source={{
          html: post?.content?.rendered ?? '',

        }}
        baseStyle={styles.htmlContent}
        enableExperimentalMarginCollapsing={true}
      />
    </ScrollView>
  );
}