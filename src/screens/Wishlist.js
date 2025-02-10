import React, {useContext, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {WishlistContext} from './WishlistContext';
import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
  const {wishlist} = useContext(WishlistContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const openImageModal = image => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeImageModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
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
      <View style={styles.favContainer}>
        <View style={styles.line} />
        <Text style={styles.favTxt}>Favourites</Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={wishlist}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.productBox}>
            <View style={styles.frameBox}>
              <TouchableOpacity onPress={() => openImageModal(item.image)}>
                <Image source={{uri: item.image}} style={styles.frameImage} />
              </TouchableOpacity>

              <View>
                <Text style={styles.frameName}>{item.title}</Text>
                <Text style={styles.framePrice}>Rs. {item.price} /-</Text>
              </View>
            </View>

            <Text style={styles.productDesc}>{item.description}</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Sucess')}
              style={styles.cartBtn}>
              <Text style={styles.cartTxt}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Wishlist;
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
  favContainer: {
    paddingVertical: 20,
    alignItems:'center',
    justifyContent:'center'
  },

  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#5f9ea0',
  },
  favTxt: {
    fontSize: 30,
    fontWeight: '200',
    textAlign:'center',
    color:'#a52a2a'
  },
  productBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
  },
  frameBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  frameImage: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
  frameName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
    marginTop: 5,
  },
  framePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#008000',
    marginVertical: 5,
    marginLeft: 10,
  },
  productDesc: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  cartBtn: {
    width: '100%',
    paddingVertical: 5,
    backgroundColor: '#4682b4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cartTxt: {
    color: '#fff',
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  modalImage: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
