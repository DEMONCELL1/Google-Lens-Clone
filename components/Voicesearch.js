import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';

const VoiceSearchScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={40} color="#aaa" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.languageButton}>
        <Image source={require('../assets/images/Language.png')} style={styles.languageIcon} />
      </TouchableOpacity>

      <Text style={styles.speakNowText}>Speak now</Text>

      <View style={styles.soundWaveContainer}>
        <View style={styles.soundWaveDotBlue} />
        <View style={styles.soundWaveDotRed} />
        <View style={styles.soundWaveDotYellow} />
        <View style={styles.soundWaveDotGreen} />
      </View>

      <TouchableOpacity style={styles.searchSongButton}>
        <Image source={require('../assets/images/Musicnote.png')} style={styles.musicNoteIcon} />
        <Text style={styles.searchSongText}>Search a song</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    justifyContent: 'center',
    backgroundColor: '#424548',
    width: 50,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
  },
  languageButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    justifyContent: 'center',
    backgroundColor: '#424548',
    width: 50,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
  },
  languageIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  speakNowText: {
    color: '#ccc',
    fontSize: 22,
    marginBottom: 40,
  },
  soundWaveContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  soundWaveDotBlue: {
    width: 12,
    height: 12,
    backgroundColor: 'blue',
    borderRadius: 6,
    margin: 5,
  },
  soundWaveDotRed: {
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 6,
    margin: 5,
  },
  soundWaveDotYellow: {
    width: 12,
    height: 12,
    backgroundColor: 'yellow',
    borderRadius: 6,
    margin: 5,
  },
  soundWaveDotGreen: {
    width: 12,
    height: 12,
    backgroundColor: 'green',
    borderRadius: 6,
    margin: 5,
  },
  searchSongButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#555',
  },
  musicNoteIcon: {
    height: 25,
    width: 25,
    left: -5,
    alignSelf: 'center',
  },
  searchSongText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VoiceSearchScreen;