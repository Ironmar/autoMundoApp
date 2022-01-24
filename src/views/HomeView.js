import React, {useEffect} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CarGeneric from '../components/generics/CardGeneric';
import AppBar from '../components/layout/AppBar';
import {fetchProducts} from '../store/tienda/action';
import Container from '../components/generics/Container';
import {dimension} from '../constants/screenDimensions';

const HomeView = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => dispatch(fetchProducts());
    getProducts();
  }, [dispatch]);
  const {products} = useSelector(state => state.tienda);

  return (
    <SafeAreaView style={styles.expand}>
      <AppBar navigation={navigation} />
      <Container>
        <Image
          source={require('../assets/img/autoMundo.png')}
          style={styles.logo}
        />
        <FlatList
          data={products}
          renderItem={item => {
            const product = item.item;
            return (
              <CarGeneric
                key={product._id}
                product={product}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={product => product._id}
          numColumns={2}
        />
      </Container>
    </SafeAreaView>
  );
};
export default HomeView;

const styles = StyleSheet.create({
  expand: {
    flex: 1,
  },
  logo: {
    width: dimension.windowWidth,
    height: 200,
    resizeMode: 'cover',
  },
});
