import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import { useFocusEffect } from '@react-navigation/native';
import Voice from "@react-native-voice/voice";


const VoiceSearchScreen = ({ navigation }) => {
    const [CurrentSpeaking, setCurrentSpeaking] = useState("");
    const ResetCurrentspeaking = useRef(false);
    const [isSpeaking, setIsSpeaking] = useState(false)
    const textInp = useRef()
    const [data, setData] = useState("");



    useFocusEffect(
        React.useCallback(() => {
            Voice.onSpeechStart = onSpeechStart;
            Voice.onSpeechEnd = onSpeechEnd;
            Voice.onSpeechResults = onSpeechResults;
            Voice.onSpeechError = (err) => console.log("Speech error: ", err);
           
            return () => {
                Voice.destroy().then(Voice.removeAllListeners);
            };
        }, [])
        

    );
    useEffect(() => {
        Startlisten()
    }, [])
    
    const onSpeechStart = () => {
        // setListening(true);
    };

    const onSpeechEnd = () => {
        // setListening(false);
        setCurrentSpeaking("");
        // speechEndedRef.current = true;
    };

    const onSpeechResults = (event) => {
        const speechResult = event.value[0];
        console.log("Speaking:---", speechResult);
        setCurrentSpeaking(speechResult);
    };

    const Startlisten = async () => {
        console.log("+++++++=========");
        try {
            ResetCurrentspeaking.current = true;
            await Voice.start("en-US");
            setIsSpeaking(true)
        } catch (err) {
            setIsSpeaking(false)
            console.log("Error in Startlisten: ", err);
        }
    };




    const Stoplisten = async (TimerFinish) => {
        console.log("__________>>>>>>>>");
        try {
            await Voice.stop();
            Voice.removeAllListeners();
            //   isSpeakingRef.current = false;
            setData((prev) => prev + " " + CurrentSpeaking);
            ResetCurrentspeaking.current = false;
            setIsSpeaking(false)

            if (candidate?.candidate?.interview_type == 3 && TimerFinish) {

                setFinishInterview(true);

                Next()
            }
            else if (candidate?.candidate?.interview_type !== 3 && TimerFinish) {
                Next()
            }

        } catch (err) {
            // setIsSpeaking(true)
            console.log("Error in Stoplisten: ", err);
        }
    };
  return (
    <View style={{ flex: 1, backgroundColor: '#111', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ position: 'absolute', top: 40, left: 20 }} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', top: 40, right: 20 }}>
        <Icon name="globe-outline" size={32} color="white" />
      </TouchableOpacity>
          <Text style={{ color: '#ccc', fontSize: 22, marginBottom: 40 }}>Speak now</Text>
          <TextInput
              ref={textInp}
              value={
                  ResetCurrentspeaking.current == true
                      ? data + " " + CurrentSpeaking
                      : data
              }
              placeholderTextColor="#2A2E49"
              onChangeText={(text) => setData(text)}
              multiline
              keyboardType="ascii-capable"
              returnKeyType="done"
              maxLength={2000}
              contextMenuHidden={true}
              blurOnSubmit
              style={
                  {color:'#fff'}
              }
          />
      <View style={{ flexDirection: 'row', marginBottom: 40 }}>
        <View style={{ width: 12, height: 12, backgroundColor: 'blue', borderRadius: 6, margin: 5 }} />
        <View style={{ width: 12, height: 12, backgroundColor: 'red', borderRadius: 6, margin: 5 }} />
        <View style={{ width: 12, height: 12, backgroundColor: 'yellow', borderRadius: 6, margin: 5 }} />
        <View style={{ width: 12, height: 12, backgroundColor: 'green', borderRadius: 6, margin: 5 }} />
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#222', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30, borderWidth: 1, borderColor: '#555' }}>
        <Icon name="musical-notes-outline" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: 'white', fontSize: 16 }}>Search a song</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceSearchScreen;
