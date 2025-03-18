import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';

const recentSearches = [
  'sleeveless gilet jacket men india',
  'sequins skirt less than 2000',
  'cut out bodysuit india',
  'floral crop top',
  'black leather skirt with button',
  'neon shirt',
  "oversized women's leather jacket india",
];

export default function TextSearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(recentSearches);

  useEffect(() => {
    if (query.length > 0) {
      const matched = recentSearches.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(matched);
    } else {
      setFilteredSuggestions(recentSearches);
    }
  }, [query]);

  const handleSelectSuggestion = (suggestion) => {
    navigation.navigate('Results', { query: suggestion });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Icon name="angle-left" size={30} color="#aaa" style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search or type URL"
          placeholderTextColor="#aaa"
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        <TouchableOpacity onPress={() => {navigation.navigate('VoiceSearchScreen')}}>
          <Icon name="microphone" size={20} color="#fff" style={styles.microphoneIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lens')}>
          <Image source={require('../assets/images/camera.png')} style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentText}>Recent searches</Text>
        <Text style={styles.recentText}>MANAGE HISTORY</Text>
      </View>

      <FlatList
        data={filteredSuggestions}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.suggestionItem} onPress={() => handleSelectSuggestion(item)}>
            <View style={styles.clockIconContainer}>
              <Icon name="clock-o" size={20} color="#aaa" />
            </View>
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  recentText: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#3c4043',
  },
  suggestionText: {
    color: '#fff',
  },
  clockIconContainer: {
    backgroundColor: '#303134',
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    padding: 8,
  },
  microphoneIcon: {
    marginHorizontal: 30,
  },
  cameraIcon: {
    height: 30,
    width: 30,
    right: 10,
    top: 1,
  },
  recentSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});