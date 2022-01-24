import React, {useState} from 'react';
import {View, Image, SafeAreaView, StyleSheet} from 'react-native';
import {Button, Caption, Subheading, Title} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AmountButtons from '../components/generics/AmountButtons';
import Container from '../components/generics/Container';
import AppBar from '../components/layout/AppBar';
import BottomNavigatior from '../components/layout/BottomNavigator';
import {colors} from '../constants/colors';
import {addProductsCart} from '../store/tienda/action';

const ProductView = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.tienda);
  const [input, setInput] = useState('0');

  const router = route.params;
  const {img, desc, price, amount, name} = router;

  const addCart = () => {
    if (input === '0' || input === 0) {
      return;
    }
    if (isNaN(cart[name])) {
      cart[name] = 0;
    }
    const totalAmount = Number(cart[name]) + Number(input);
    const totalPrice = price * Number(input);
    dispatch(addProductsCart(name, totalPrice, totalAmount));
    setInput('0');
  };
  return (
    <SafeAreaView style={styles.expand}>
      <AppBar navigation={navigation} background={colors.grayLight} />
      <Container color={colors.grayLight} padding={0}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={{uri: `${img}`}} />
        </View>
        <View style={styles.content}>
          <Title style={{...styles.textCenter, ...styles.title}}>{name}</Title>
          <Title style={{...styles.textCenter, ...styles.price}}>
            ${price}
          </Title>
          <AmountButtons value={input} setValue={setInput} amount={amount} />
          <Button
            mode="outlined"
            icon="cart"
            color={`${colors.autoRed}`}
            onPress={addCart}
            style={styles.button}>
            Agregar al carrito
          </Button>
          <View>
            <Subheading style={styles.textCenter}>Descripción</Subheading>
            <Caption style={styles.textCenter}>{desc}</Caption>
          </View>
        </View>
        <View style={styles.blank} />
      </Container>
      <BottomNavigatior navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProductView;

const styles = StyleSheet.create({
  expand: {
    flex: 1,
  },
  bg: {
    backgroundColor: colors.autoRed,
  },
  imageContainer: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowColor: colors.gray,
    textShadowRadius: 1,
  },
  price: {
    color: colors.autoRed,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowColor: colors.grayLight,
    textShadowRadius: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.autoRed,
    borderRadius: 10,
  },
  blank: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
