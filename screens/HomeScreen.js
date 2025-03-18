import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import GoogleSearchBar from '../components/GoogleSearchBar';
import FeedItem from '../components/FeedItem';
import Icon from '@react-native-vector-icons/fontawesome6';
import Scales from '../components/Scales';

export default function HomeScreen({ navigation }) {
  const [feedData] = useState([
    {
      id: '1',
      title: 'This superstar was once Ratan Tata’s closest friend...',
      image: require('../assets/images/sample1.jpeg'),
    },
    {
        id: '2',
        title: 'This superstar was once Ratan Tata’s closest friend...',
        image: require('../assets/images/sample1.jpeg'),
      },
      {
          id: '3',
          title: 'This superstar was once Ratan Tata’s closest friend...',
          image: require('../assets/images/sample1.jpeg'),
      },
      {
          id: '4',
          title: 'Breaking News: Something else trending...',
          image: require('../assets/images/sample2.jpeg'),
      },
  ]);

    const handleSignIn = () => {
        alert('Mock Sign-In clicked');
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[2]}
            style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/Flask.png')} style={styles.flaskIcon} />
                <TouchableOpacity style={styles.searchButton}>
                    <View style={styles.content}>
                        <Image source={require('../assets/images/Google.png')} style={styles.googleIcon} />
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                    <Image source={require('../assets/images/starnew.png')} style={styles.starIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileCircle} onPress={handleSignIn}>
                    <Text style={styles.profileText}>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/images/GoogleLogo.png")} style={styles.googleLogo} />
            </View>
            <GoogleSearchBar
                onMicPress={() => navigation.navigate('VoiceSearchScreen')}
                onLensPress={() => navigation.navigate('Lens')}
                onFocus={() => navigation.navigate('TextSearch')}
            />

            <View style={styles.quickActions}>
                <TouchableOpacity style={[styles.actionIcon, styles.actionIcon1]}>
                    <Image source={require('../assets/images/ImageSearch.png')} style={styles.quickActionImage} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionIcon, styles.actionIcon2]}>
                    <Image source={require('../assets/images/Lang.png')} style={styles.quickActionImage} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionIcon, styles.actionIcon3]}>
                    <Image source={require('../assets/images/Edu.png')} style={styles.quickActionImage} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionIcon, styles.actionIcon4]}>
                    <Image source={require('../assets/images/Music.png')} style={styles.quickActionImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.infoCards}>
                <View style={styles.infoCard}>
                    <Text style={styles.titleText}>Gurugram</Text>
                    <View style={styles.row}>
                        <Text style={styles.tempText}>30°</Text>
                        <Text style={styles.emoji}>🌙</Text>
                    </View>
                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.titleText}>Air quality · 170</Text>
                    <View style={styles.row}>
                        <Text style={styles.tempText}>Moderate</Text>
                        <View style={styles.aqiIcon}>
                            <Text style={styles.aqiEmoji}>〰️</Text>
                        </View>
                    </View>
                </View>
            </View>

            <FlatList
                data={feedData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FeedItem item={item} />}
                style={styles.feedList}
            />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  flaskIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3c4043',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: { 
    color: '#fff' 
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  actionIcon: {
    width: 80, 
    height: 50, 
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon1: {
    backgroundColor: '#4C4530'
  },
  actionIcon2: {
    backgroundColor: '#353E4E'
  },
  actionIcon3: {
    backgroundColor: '#33423A'
  },
  actionIcon4: {
    backgroundColor: '#4A3034'
  },
  quickActionImage: {
    width: 28, 
    height: 28,
    resizeMode: 'contain',
  },
  infoCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoCard: {
    backgroundColor: 'transparent',
    padding: 12,
    width: '48%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#444746',
  },
  titleText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  tempText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  aqiIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFD900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aqiEmoji: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginRight: 10,
  },

  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#303134',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: Scales.deviceWidth*0.35, 
  },
  content: {
    padding:7,
    flexDirection: 'row',
    backgroundColor:'#202124',
    alignItems: 'center',
    borderRadius: 10,
  },
  googleIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  starIcon: {
    width: 40,
    height: 40,
    marginRight: 6,
  },

  searchText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  separator: {
    backgroundColor: "#3C4043", 
    height: 1, 
    marginBottom: 15, 
    marginTop: 15, 
    width: Scales.deviceWidth * 0.97, 
    alignSelf: 'center'
  },
  feedList: { 
    marginTop: 10 
  },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Scales.deviceHeight * 0.18,
    },
    googleLogo: {
        width: Scales.deviceWidth * 0.32,
        height: 40
    }
});