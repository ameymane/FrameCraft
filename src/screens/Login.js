import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const Login = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headTxt}>Welcome</Text>
        <Text style={styles.headTxt}>Back!</Text>
      </View>
      <View style={styles.loginContainerBox}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../components/assets/images/icons/user.png')}
            style={styles.inputImg}
          />
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor={'#A8A8A9'}
            value={(username, email)}
            onChangeText={(setUsername, setEmail)}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPass');
          }}>
          <Text style={styles.frgtPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={
          ()=>{
            navigation.navigate('BottomNav');
          }
        }>
          <Text style={styles.loginBtnTxt}>Login</Text>
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
        <Text style={styles.alreadyTxt}>Create An Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.signupTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
  loginContainerBox: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 20,
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
  loginBtn: {
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
  loginBtnTxt: {
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
    marginTop: '16%',
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
  signupTxt: {
    fontSize: 16,
    color: '#a52a2a',
    marginLeft: 5,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
