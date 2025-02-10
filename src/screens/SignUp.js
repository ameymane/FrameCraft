import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userData, setUserData] = useState();
  // console.log(userData.message);

  const handleBtn = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match. Please try again.');
      return;
    }
    Alert.alert('Success', 'Account created successfully!');
    // navigation.navigate('BottomNav');
  };

  const registerUser = async () => {
    const formdata = new FormData();
    formdata.append('name', username);
    formdata.append('email', mobileNumber);
    formdata.append('password', password);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        'https://trrev.in/just-academy-project/api/auth/register',
        requestOptions,
      );
      const result = await response.json();
      console.log(result);
      if (result.message == 'Registration successful') {
        setUserData(result);
        Alert.alert(result.message);
      } else {
        Alert.alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headTxt}>Create an</Text>
        <Text style={styles.headTxt}>account</Text>
      </View>
      <View style={styles.loginContainerBox}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../components/assets/images/icons/user.png')}
            style={styles.inputImg}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={'#A8A8A9'}
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../components/assets/images/icons/email.png')}
            style={styles.inputImg}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={'#A8A8A9'}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, styles.passwordContainer]}>
          <Image
            source={require('../components/assets/images/icons/lock.png')}
            style={styles.inputImg}
          />
          <TextInput
            maxLength={8}
            placeholder="Password"
            placeholderTextColor={'#A8A8A9'}
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Image
                source={require('../components/assets/images/icons/show.png')}
                style={styles.eyeImg}
              />
            ) : (
              <Image
                source={require('../components/assets/images/icons/hide.png')}
                style={styles.eyeImg}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={[styles.inputContainer, styles.passwordContainer]}>
          <Image
            source={require('../components/assets/images/icons/lock.png')}
            style={styles.inputImg}
          />
          <TextInput
            maxLength={8}
            placeholder="Confirm password"
            placeholderTextColor={'#A8A8A9'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.textInput}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Image
                source={require('../components/assets/images/icons/show.png')}
                style={styles.eyeImg}
              />
            ) : (
              <Image
                source={require('../components/assets/images/icons/hide.png')}
                style={styles.eyeImg}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.createAccountBtn}
          onPress={registerUser}>
          <Text style={styles.createAccountBtnTxt}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dividerTxt}>- OR Continue with -</Text>
      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.btnCircle}>
          <Image
            source={require('../components/assets/images/icons/google.png')}
            style={styles.btnImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCircle}>
          <Image
            source={require('../components/assets/images/icons/apple.png')}
            style={styles.btnImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCircle}>
          <Image
            source={require('../components/assets/images/icons/facebook.png')}
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.alreadyBtnContainer}>
        <Text style={styles.alreadyTxt}>I Already Have an Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
  },
  textContainer: {
    marginLeft: 18,
    marginTop: 15,
  },
  headTxt: {
    fontSize: 40,
    fontWeight: '800',
    color: '#008080',
  },
  loginContainerBox: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 15,
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
  passwordContainer: {
    justifyContent: 'space-between',
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
  eyeImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  frgtPass: {
    color: '#a52a2a',
    fontSize: 14,
    fontWeight: 'medium',
    alignSelf: 'flex-end',
    marginTop: 8,
    marginRight: 20,
  },
  createAccountBtn: {
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
  createAccountBtnTxt: {
    color: '#008080',
    fontSize: 18,
    fontWeight: '800',
    elevation: 5,
    shadowColor: 'black',
  },
  dividerTxt: {
    color: '#575757',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: '5%',
  },
  loginBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FCF3F6',
    borderWidth: 2,
    borderColor: '#a52a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 20,
  },
  btnImg: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },
  alreadyBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  alreadyTxt: {
    fontSize: 16,
    color: '#000',
  },
  loginTxt: {
    fontSize: 16,
    color: '#a52a2a',
    marginLeft: 5,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
