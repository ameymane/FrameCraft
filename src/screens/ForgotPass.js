import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const ForgotPass = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headTxt}>Forgot</Text>
          <Text style={styles.headTxt}>password?</Text>
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../components/assets/images/icons/email.png')}
            style={styles.inputImg}
          />
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={'#A8A8A9'}
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            <Text style={{color: '#FF4B26'}}>*</Text> We will send you a message
            to set or reset
          </Text>
          <Text style={[styles.description, {paddingLeft: 10}]}>
            your new password
          </Text>
        </View>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ForgotPass;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff5ee',
    },
    textContainer: {
      marginLeft: 18,
      marginTop: 30,
    },
    headTxt: {
      fontSize: 40,
      fontWeight: '800',
      color: '#008080',
    },
    inputContainer: {
      width: '90%',
      height: 45,
      backgroundColor: '#F3F3F3',
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: '#A8A8A9',
      alignSelf: 'center',
      marginTop: 25,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
    },
    inputImg: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    textInput: {
      flex: 1,
      color: '#000',
      marginLeft: 5,
    },
    descriptionContainer: {
      marginTop: 15,
      marginLeft: 20,
    },
    description: {
      color: '#676767',
      fontSize: 12,
    },
    submitBtn: {
      width: '70%',
      height: 40,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#008080',
      backgroundColor: '#f0f8ff',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
   submitBtnTxt: {
      color: '#008080',
      fontSize: 18,
      fontWeight: '800',
      elevation: 5,
      shadowColor: 'black',
    },
  });
  