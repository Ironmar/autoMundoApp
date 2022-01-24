import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const CarGeneric = ({product, navigation}) => {
  const {name, img, price} = product;

  return (
    <TouchableOpacity
      style={styles.press}
      onPress={() => navigation.navigate('product', product)}>
      <Card style={styles.card}>
        <Card.Cover source={{uri: img}} />
        <Card.Content>
          <Title style={styles.textCenter}>{name}</Title>
          <Paragraph style={styles.textCenter}>${price}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
export default CarGeneric;

const styles = StyleSheet.create({
  press: {
    width: '50%',
  },
  card: {
    borderColor: 'gray',
    borderRadius: 10,
    elevation: 10,
    margin: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
});
