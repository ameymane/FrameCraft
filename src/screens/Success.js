import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Success = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../components/assets/images/icons/success.png')}
        style={styles.successImg}
      />
      <Text style={styles.successTxt}>Buy Product Successfully</Text>
      <TouchableOpacity
        style={styles.gotoHome}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.gohomeTxt}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImg: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  successTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#838383',
  },
  gotoHome: {
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    marginTop: 30,
  },
  gohomeTxt: {
    fontSize: 15,
    color: '#838383',
  },
});
