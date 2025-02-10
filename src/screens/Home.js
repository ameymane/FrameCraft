import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {WishlistContext} from './WishlistContext';
import {Categories} from './Data';
import {Keyboard} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {addToWishlist, removeFromWishlist, wishlist} =
    useContext(WishlistContext);
  const [menuVisible, setMenuVisible] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch Products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://trrev.in/just-academy-project/api/auth/product',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({categories_id: '66'}),
        },
      );

      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Search
  const handleSearch = text => {
    setSearchQuery(text);

    if (text === '') {
      setFilteredProducts([]);
      setIsSearchModalVisible(false);
      Keyboard.dismiss();
    } else {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProducts(filtered);
      setIsSearchModalVisible(true);
    }
  };

  // Open and Close Image Modal
  const openImageModal = image => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeImageModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };
  // Toggle Wishlist
  const toggleWishlist = item => {
    if (wishlist.some(wishlistItem => wishlistItem.id === item.id)) {
      console.log('Removing from wishlist:', item);
      removeFromWishlist(item.id);
    } else {
      console.log('Adding to wishlist:', item);
      addToWishlist(item);
    }
    console.log('Updated wishlist:', wishlist);
  };

  // Render Product Item
  const renderProduct = ({item}) => (
    <View style={styles.productBox}>
      <View style={styles.frameBox}>
        <TouchableOpacity onPress={() => openImageModal(item.image)}>
          <Image source={{uri: item.image}} style={styles.frameImage} />
        </TouchableOpacity>

        <View>
          <Text style={styles.frameName}>{item.title}</Text>
          <Text style={styles.framePrice}>Rs. {item.price} /-</Text>
        </View>
        {/* Wishlist Button */}
        <TouchableOpacity
          onPress={() => toggleWishlist(item)}
          style={styles.heartBtn}>
          <Image
            source={
              wishlist.some(wishlistItem => wishlistItem.id === item.id)
                ? require('../components/assets/images/icons/heart.png')
                : require('../components/assets/images/icons/like.png')
            }
            style={styles.heartImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.productDesc}>{item.description}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Sucess')}
        style={styles.cartBtn}>
        <Text style={styles.cartTxt}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

  // Render Categories
  const categoriesArray = Object.keys(Categories).map(key => ({
    title: key,
    items: Categories[key],
  }));
  const handleCategoryPress = (category, items) => {
    navigation.navigate('Details', {
      category: category,
      data: items,
    });
  };
  const closeSearchModal = () => {
    setSearchQuery('');
    setFilteredProducts([]);
    setIsSearchModalVisible(false);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../components/assets/images/frame1.png')}
            style={styles.logoImg}
          />
          <Text style={styles.logoTxt}>FrameCraft</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../components/assets/images/icons/search.png')}
          style={styles.iconImg}
        />
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        {/* Search Results in Modal */}
        <Modal
          visible={isSearchModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeSearchModal}>
          {' '}
          {/* Close and clear on close */}
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={closeSearchModal}>
            <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
              {filteredProducts.length > 0 ? (
                <FlatList
                  data={filteredProducts}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.productItem}
                      onPress={() => {
                        navigation.navigate('ProductDetails', {product: item});
                        closeSearchModal();
                      }}>
                      <Text style={styles.productTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <Text style={styles.noResults}>No products found</Text>
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>

      <ScrollView>
        {/* Banner */}
        <View style={styles.bannerWrapper}>
          <Image
            source={require('../components/assets/images/Banner.png')}
            style={styles.bannerImg}
          />
          <View style={styles.bannerOverlay}>
            <Image
              source={require('../components/assets/images/adframe.png')}
              style={styles.frameImg}
            />
            <View style={styles.bannerCption}>
              <Text style={styles.bannerTxt}> Explore Our Exclusive</Text>
              <Text style={styles.bannerTxt}> Photo Frame Collection!</Text>
              <TouchableOpacity style={styles.exploreBtn}>
                <Text style={styles.exploreTxt}>Explore</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Category</Text>
        </View>
        <FlatList
          horizontal
          data={categoriesArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.catagoryBar}>
              <TouchableOpacity
                onPress={() =>
                  handleCategoryPress(item.title, Categories[item.title])
                }
                style={styles.categoryBtn}>
                <Text style={styles.categoryTxt}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Products */}
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Trendy Collection</Text>
        </View>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
          contentContainerStyle={styles.listContainer}
        />

        {/* Image Modal */}
        {selectedImage && (
          <Modal
            transparent
            visible={isModalVisible}
            onRequestClose={closeImageModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeImageModal}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <Image
                  source={{uri: selectedImage}}
                  style={styles.modalImage}
                />
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
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
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  searchContainer: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
    marginVertical: 25,
  },
  iconImg: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  searchInput: {
    width: '80%',
    color: '#000',
    marginLeft: 10,
  },
  bannerWrapper: {
    width: '90%',
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  bannerOverlay: {
    position: 'absolute',
    flexDirection: 'row',
  },
  frameImg: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    margin: 15,
  },
  bannerCption: {
    marginTop: 35,
  },
  bannerTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
  },
  exploreBtn: {
    width: 90,
    height: 22,
    backgroundColor: '#faebd7',
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    elevation: 10,
  },
  exploreTxt: {
    color: '#000',
    fontWeight: '600',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headingTxt: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
  },
  headingBtnTxt: {
    color: '#8b0000',
    textDecorationLine: 'underline',
  },
  productBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    position: 'relative',
  },
  frameBox: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    position: 'relative',
  },
  frameImage: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
  frameName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#000',
    marginTop: 5,
  },
  framePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#008000',
    marginVertical: 5,
    marginLeft: 15,
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
    paddingVertical: 15,
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
  catagoryBar: {
    marginTop: 10,
    paddingLeft: 20,
  },
  categoryBtn: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  categoryTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heartBtn: {
    position: 'absolute',
    top: '10%',
    right: 6,
    borderRadius: 20,
    zIndex: 1,
  },
  heartImage: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent1: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    maxHeight: '80%',
  },
  closeButton1: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeText: {fontSize: 16, color: 'red'},
  productItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  productTitle: {fontSize: 16, color: '#000'},
  noResults: {textAlign: 'center', marginTop: 20, fontSize: 16},
});
