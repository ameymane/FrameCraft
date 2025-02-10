import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../components/assets/images/frame1.png')}
            style={styles.logoImg}
          />
          <Text style={styles.logoTxt}>FrameCraft</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../components/assets/images/avatar.png')}
          style={styles.profileImg}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>User</Text>
        </View>
        <View style={styles.profieAddress}>
          <Text style={styles.address}>Moscow, Russia</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>Account Setttings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Myfav');
          }}>
          <Text style={styles.btntxt}>My favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>Order history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>Legal & Policies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 18,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoImg: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
  logoTxt: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImg: {
    height: 165,
    width: 165,
    resizeMode: 'cover',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2b2b2b',
  },
  editIcon: {
    height: 13,
    width: 13,
    resizeMode: 'cover',
    marginLeft: 5,
  },
  profieAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  address: {
    fontSize: 17,
    fontWeight: 'medium',
    color: '#A1A1A2',
  },
  locImg: {
    height: 17,
    width: 17,
    resizeMode: 'cover',
    marginTop: 2,
  },
  btnContainer: {
    marginTop: 2,
  },
  button: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderWidth: 0.1,
    marginTop: 15,
    elevation: 3,
    shadowColor: '#B3B3B3',
  },
  btnImg: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
    marginRight: 10,
  },
  btntxt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2b2b2b',
  },
  viewTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#F7F7F8',
  },
  ArrowImg: {
    height: 17,
    width: 17,
    resizeMode: 'cover',
    marginLeft: 10,
  },
});
