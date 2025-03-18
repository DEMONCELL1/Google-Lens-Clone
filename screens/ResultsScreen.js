import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

/**
 * Results screen for both text-based and image-based searches.
 * We handle both scenarios with props: route.params.query or route.params.imageUri
 */

export default function ResultsScreen({ route, navigation }) {
  const { query, imageUri } = route.params || {};

  // Placeholder results data
  const mockImageResults = [
    { id: '1', title: 'Result 1', uri: 'https://via.placeholder.com/200' },
    { id: '2', title: 'Result 2', uri: 'https://via.placeholder.com/200' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {query ? `Search results for "${query}"` : 'Image search results'}
      </Text>

      {imageUri && (
        <View style={styles.referenceImageContainer}>
          <Text style={styles.subtitle}>Reference Image:</Text>
          <Image source={{ uri: imageUri }} style={styles.referenceImage} />
          <TouchableOpacity
            style={styles.minimizeButton}
            onPress={() => alert('Minimize reference image pressed')}
          >
            <Text style={{ color: '#fff' }}>Minimize</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.resultsContainer}>
        {mockImageResults.map((item) => (
          <View key={item.id} style={styles.resultItem}>
            <Image source={{ uri: item.uri }} style={styles.resultImage} />
            <Text style={styles.resultTitle}>{item.title}</Text>
            <TouchableOpacity
              style={styles.addToSearchButton}
              onPress={() => alert('Add to search pressed')}
            >
              <Text style={{ color: '#fff' }}>Add to search</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: '#fff' }}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    paddingTop: 50,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  subtitle: {
    color: '#fff',
    marginBottom: 4,
  },
  referenceImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  referenceImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  minimizeButton: {
    backgroundColor: '#3c4043',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginTop: 6,
  },
  resultsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
  },
  resultImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  resultTitle: {
    flex: 1,
    color: '#fff',
  },
  addToSearchButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  goBackButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
});
