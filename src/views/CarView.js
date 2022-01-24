import React from 'react';
import {Image, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import BottomNavigator from '../components/layout/BottomNavigator';
import {colors} from '../constants/colors';
import {dimension} from '../constants/screenDimensions';
import {useSelector} from 'react-redux';
import {Button, Portal, Modal, Title} from 'react-native-paper';

const CarView = ({navigation}) => {
  const {cart, total} = useSelector(state => state.tienda);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};

  return (
    <SafeAreaView style={styles.expand}>
      <View style={styles.cartContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/img/autoMundo.png')}
        />
        <View style={styles.wrapper}>
          <View style={styles.table}>
            <Text style={styles.cellHead}>Cantidad</Text>
            <Text style={styles.cellHead}>Producto</Text>
          </View>

          {Object.entries(cart).map(item => {
            return (
              <View key={item[0]} style={styles.table}>
                <Text style={styles.cell}>{item[1]}</Text>
                <Text style={styles.cell}>{item[0]}</Text>
              </View>
            );
          })}
          <View style={styles.table}>
            <Text style={styles.cell}>Total</Text>
            <Text style={styles.cell}>{total}</Text>
          </View>
        </View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Title style={styles.modaltext}>Auto Mundo</Title>
            <Text style={styles.modaltext}>Gracias por su compra!</Text>
            <Button
              icon="close"
              color={colors.autoRed}
              onPress={() => {
                navigation.navigate('home');
                hideModal();
              }}>
              Cerrar
            </Button>
          </Modal>
        </Portal>

        <Button
          mode="contained"
          icon="credit-card-outline"
          color={colors.autoRed}
          onPress={showModal}>
          Pagar
        </Button>
      </View>

      <BottomNavigator navigation={navigation} />
    </SafeAreaView>
  );
};

export default CarView;

const styles = StyleSheet.create({
  expand: {
    flex: 1,
  },
  logo: {
    width: dimension.windowWidth,
    height: 200,
    resizeMode: 'cover',
  },
  table: {
    flexDirection: 'row',
  },
  cellHead: {
    flex: 1,
    borderWidth: 1,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    paddingLeft: 20,
    paddingVertical: 5,
  },

  wrapper: {
    borderWidth: 1,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: colors.grayLight,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  modaltext: {
    textAlign: 'center',
    marginVertical: 5,
  },
});
