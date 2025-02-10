import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const ProductDetails = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <View style={styles.box}>
        <Image source={{uri: product.image}} style={styles.productImage} />
        <Text style={styles.productPrice}>Rs. {product.price}/-</Text>
        <Text style={styles.productDesc}>{product.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
    padding: 20,
    position: 'relative',
  },
  box: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#008000',
    marginVertical: 10,
  },
  productDesc: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});
