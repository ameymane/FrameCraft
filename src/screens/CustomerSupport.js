import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';

const CustomerSupport = () => {
  const phoneNumber = '1234567890';
  const makeCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const sendEmail = () => {
    const email = 'example@gmail.com'; 
    const subject = 'Hello!';
    
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    Linking.openURL(url).catch(err => console.error('Error opening email client:', err));
  };

  const openWhatsApp = () => {
    let phoneNumber = '1234567890'; 
    let message = 'Hello';
    
    let url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'WhatsApp is not installed on this device');
    });
  };
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
      <Text style={styles.contactTxt}>Contact Us</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTxt1}>
          Our dedicated customer support team is
        </Text>
        <Text style={styles.descriptionTxt1}>
          available from <Text style={{fontWeight: '800'}}>9 AM to 9 PM</Text>,
          7 days a
        </Text>
        <Text style={styles.descriptionTxt1}>
          week, to assist with any questions or
        </Text>
        <Text style={styles.descriptionTxt1}>concerns.</Text>
      </View>
      <Text style={[styles.descriptionTxt2, {marginTop: 10}]}>
        Feel free to react out to us during these
      </Text>
      <Text style={styles.descriptionTxt2}>
        hours, and we'll be delighted to assist you
      </Text>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={[styles.supportBtn, {borderBottomWidth: 1}]}
          onPress={makeCall}>
          <Image
            source={require('../components/assets/images/icons/telephone.png')}
            style={styles.supportIcon}
          />
          <Text style={[styles.supportTxt, {color: '#ffa500'}]}>
            Call Support
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.supportBtn, {borderBottomWidth: 1}]}
          onPress={sendEmail}>
          <Image
            source={require('../components/assets/images/icons/mail.png')}
            style={styles.supportIcon}
          />
          <Text style={[styles.supportTxt, {color: '#2196F3'}]}>
            E-Mail Support
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supportBtn} onPress={openWhatsApp}>
          <Image
            source={require('../components/assets/images/icons/whatsapp.png')}
            style={styles.supportIcon}
          />
          <Text style={[styles.supportTxt, {color: '#29A71A'}]}>
            Whatsapp Chat Support
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerSupport;

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
  contactTxt: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  descriptionTxt1: {
    color: '#000',
    fontSize: 16,
  },
  descriptionTxt2: {
    color: '#000',
    fontSize: 16,
    alignSelf: 'center',
  },
  subContainer: {
    width: '90%',
    // paddingVertical: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 60,
    elevation: 10,
    borderRadius: 15,
  },
  supportBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    gap: 10,
  },
  supportIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginLeft: 30,
  },
  supportTxt: {
    fontSize: 16,
    fontWeight: '600',
  },
});
