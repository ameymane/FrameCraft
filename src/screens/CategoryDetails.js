import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CategoryDetails = ({route}) => {
  const navigation = useNavigation();
  const {category, data} = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category}</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.productBox}>
            <View style={styles.frameBox}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.frameImage} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff5ee',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  productBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 10,
    position: 'relative',
  },
  frameBox: {
    flexDirection: 'row',
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
  heartBtn: {
    position: 'absolute',
    top: '50%',
    right: 6,
    borderRadius: 20,
    zIndex: 2,
  },
  heartImage: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },
  moreBtn: {
    position: 'absolute',
    top: 5,
    right: 2,
    zIndex: 1,
    padding: 1,
    borderRadius: 5,
  },
  moreImg: {
    width: 30,
    height: 20,
    resizeMode: 'cover',
  },
});

export default CategoryDetails;
