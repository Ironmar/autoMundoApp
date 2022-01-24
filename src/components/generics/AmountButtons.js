import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {Paragraph} from 'react-native-paper';
import {dimension} from '../../constants/screenDimensions';
import {colors} from '../../constants/colors';

const AmountButtons = ({value, amount, setValue}) => {
  const [disabledLeft, SetDisabledLeft] = useState(false);
  const [disabledRight, SetDisabledRight] = useState(false);

  let intValue = parseInt(value, 10);
  const add = () => {
    intValue++;

    setValue(String(intValue));
  };
  const subtract = () => {
    intValue--;
    setValue(String(intValue));
  };
  useEffect(() => {
    if (intValue >= amount) {
      SetDisabledRight(true);
    } else {
      SetDisabledRight(false);
    }
    if (intValue <= 0) {
      SetDisabledLeft(true);
    } else {
      SetDisabledLeft(false);
    }
  }, [amount, intValue]);
  return (
    <View style={styles.amount}>
      <TouchableOpacity
        disabled={disabledLeft}
        style={{...styles.button, ...styles.buutonLeft}}
        onPress={subtract}>
        <Paragraph style={styles.textCenter}>-</Paragraph>
      </TouchableOpacity>
      <TextInput
        maxLength={3}
        value={value}
        style={(styles.input, styles.textCenter)}
      />
      <TouchableOpacity
        disabled={disabledRight}
        style={{...styles.button, ...styles.buttonRight}}
        onPress={add}>
        <Paragraph style={styles.textCenter}>+</Paragraph>
      </TouchableOpacity>
    </View>
  );
};
export default AmountButtons;

const styles = StyleSheet.create({
  amount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 10,
    width: dimension.windowWidth * 0.3,
  },
  button: {
    width: '33.3%',
    justifyContent: 'center',
    fontWeight: '800',
  },
  buutonLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  input: {
    width: '33.3%',
    maxWidth: '33.3%',
  },
  textCenter: {
    textAlign: 'center',
    color: colors.gray,
    fontWeight: 'bold',
  },
});
