import React, {useEffect, useState} from 'react';
import {Appbar, Badge} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {useSelector} from 'react-redux';

const AppBar = ({navigation, background = '#fff'}) => {
  const [cartAmount, setCartAmount] = useState(0);

  const {cart} = useSelector(state => state.tienda);
  useEffect(() => {
    const val = Object.values(cart);
    if (val.length > 0) {
      val.reduce((acum, curr) => acum + curr);
      setCartAmount(val);
    }
  }, [cart]);
  return (
    <Appbar style={{...styles.appBar, backgroundColor: background}}>
      <Appbar.Action
        icon="cart-minus"
        onPress={() => navigation.navigate('cart')}
      />
      <Badge style={styles.badge} size={18}>
        {cartAmount}
      </Badge>
    </Appbar>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    elevation: 0,
  },
  badge: {
    position: 'absolute',
    right: 4,
    top: 7,
    backgroundColor: colors.autoRed,
  },
});
