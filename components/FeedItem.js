import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function FeedItem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.feedImage} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303134',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderRadius:15,
    // borderTopRightRadius:20
    // padding: 10,
  },
  feedImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    resizeMode: 'cover',
    // borderRadius: 6,
    // marginBottom: 8,
  },
  title: {
    padding:15,
    color: '#fff',
  },
});
