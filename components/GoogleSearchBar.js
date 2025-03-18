import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
export default function GoogleSearchBar({ onMicPress, onLensPress, onFocus }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
       onPress={onFocus}
      style={styles.searchWrapper}>
        <Icon name="search" size={20} color="#9AA0A6"  style={{ marginLeft: 27 }} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#aaa"
          onFocus={onFocus}
        />
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            right:20
            // backgroundColor:'red'
        }}>
        <TouchableOpacity onPress={onMicPress}>
          <Icon name="microphone" size={20} color="#fff" style={{ marginHorizontal:30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLensPress}>
          <Image source={require('../assets/images/camera.png')} style={{
            height:30,
            width:30,
            right:10,
            top:1,
          }} />
        </TouchableOpacity>
        </View>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,

  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    borderRadius: 60,
    paddingVertical: 3,
  },
  input: {
    flex: 1,
    fontSize:21,
    fontWeight:'300 ',
    marginLeft:15,
    color: '#9AA0A6',
  },
});
