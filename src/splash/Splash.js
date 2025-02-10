import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Started');
    }, 3000);
    return () => clearTimeout();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../components/assets/images/frameLogo.png')}
        style={styles.logoImg}
      />
      <Text style={styles.logoTxt}>FrameCraft</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff5ee',
  },
  logoImg: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
  logoTxt: {
    fontSize: 22,
    color: '#000',
    fontWeight: '800',
  },
});
