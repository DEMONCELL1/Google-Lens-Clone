import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useCameraDevice, Camera } from 'react-native-vision-camera';
import Icon from '@react-native-vector-icons/fontawesome';

export default function LensScreen({ navigation }) {
  const [cameraPermission, setCameraPermission] = useState(null);

  // Get all available camera devices (front, back, etc.)
 
const devices = useCameraDevice('back');
const device = devices;

  useEffect(() => {
    checkOrRequestPermission();
  }, []);

  const checkOrRequestPermission = async () => {
    // 1. Check the current permission status
    const status = await Camera.getCameraPermissionStatus();
    console.log("STATTuuuuss",status)
    // 2. If not authorized, request permission
    if (status !== 'granted') {
      const newStatus = await Camera.requestCameraPermission();
      setCameraPermission(newStatus);
      if (newStatus !== 'authorized') {
        Alert.alert(
          'Permission Required',
          'Camera permission is needed to use this feature.'
        );
      }
    } else {
      // Already authorized
      setCameraPermission('granted');
    }
  };

  // If camera permission not yet authorized, show a button to re-request
  if (cameraPermission !== 'granted') {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Camera permission not granted
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={checkOrRequestPermission}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // If no device is found, show an error
  if (!device) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>No camera available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera Preview */}
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="arrow-back" size={28} color="#fff" /> */}
          <Icon name="angle-left" size={40} color="#aaa" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Google Lens</Text>
        <Icon name="ellipsis-vertical" size={28} color="#fff" />
      </View>

      {/* Lens Overlay (the bounding box corners) */}
      <View style={styles.overlayContainer}>
        <View style={styles.overlayCornerTopLeft} />
        <View style={styles.overlayCornerTopRight} />
        <View style={styles.overlayCornerBottomLeft} />
        <View style={styles.overlayCornerBottomRight} />
      </View>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        {/* Translate Button */}
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="language-outline" size={24} color="#fff" />
          <Text style={styles.bottomBarItemText}>Translate</Text>
        </TouchableOpacity>

        {/* Big Circle Button (Search) */}
        <TouchableOpacity style={styles.lensButton}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Homework Button */}
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="book-outline" size={24} color="#fff" />
          <Text style={styles.bottomBarItemText}>Homework</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3c4043',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
  topBar: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  overlayContainer: {
    position: 'absolute',
    width: '80%',
    height: '50%',
    top: '25%',
    left: '10%',
  },
  overlayCornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#fff',
    borderTopLeftRadius: 6,
  },
  overlayCornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: '#fff',
    borderTopRightRadius: 6,
  },
  overlayCornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#fff',
    borderBottomLeftRadius: 6,
  },
  overlayCornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#fff',
    borderBottomRightRadius: 6,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarItemText: {
    color: '#fff',
    marginTop: 4,
  },
  lensButton: {
    width: 60,
    height: 60,
    backgroundColor: '#3c4043',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
