import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Started = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  const handlePress = () => {
    setIsVisible(false);
    navigation.navigate('BottomNav');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../components/assets/images/frame1.png')}
        style={styles.frameImg}
      />
      <Text style={styles.frameWel}>Welcome to FrameCraft</Text>
      <Text style={styles.frameTxt}>Your One-Stop Photo Frame Store</Text>
      <Animatable.View
        animation={isVisible ? 'bounceInLeft' : undefined}
        duration={1500}
        useNativeDriver={true}
        onAnimationEnd={() => setIsVisible(false)}
        style={styles.startedBtn}>
        <TouchableOpacity onPress={handlePress} style={styles.BtnContent}>
          <Text style={styles.BtnTxt}>Get Started</Text>
          <Image
            source={require('../components/assets/images/icons/rightArrow.png')}
            style={styles.arrowTxt}
          />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Started;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameImg: {
    width: '90%',
    height: '40%',
    resizeMode: 'cover',
  },
  frameTxt: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
  },
  frameWel: {
    fontSize: 25,
    color: '#000',
    fontWeight: '800',
    marginTop: 15,
  },
  startedBtn: {
    height: 40,
    width: '60%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#008080',
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  BtnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnTxt: {
    fontSize: 17,
    color: '#000',
    fontWeight: '800',
  },
  arrowTxt: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});
