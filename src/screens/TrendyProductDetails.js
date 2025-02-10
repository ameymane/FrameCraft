import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const TrendyProductDetails = () => {
  const route = useRoute();
  const { products } = route.params;

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeImageModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productBox}>
      <View style={styles.frameBox}>
        <TouchableOpacity onPress={() => openImageModal(item.image)}>
          <Image source={{ uri: item.image }} style={styles.frameImage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.frameName}>{item.title}</Text>
          <Text style={styles.framePrice}>Rs. {item.price} /-</Text>
        </View>
      </View>
      <Text style={styles.productDesc}>{item.description}</Text>
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartTxt}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trendy Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal for image */}
      {selectedImage && (
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeImageModal}
          animationType="fade"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeButton} onPress={closeImageModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default TrendyProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
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
    alignSelf:'center'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#000'
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
