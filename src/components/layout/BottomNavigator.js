import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, IconButton} from 'react-native-paper';
import {colors} from '../../constants/colors';
const BottomNavigator = ({navigation}) => {
  return (
    <View style={styles.navigator}>
      <IconButton
        icon="home-outline"
        color={Colors.white}
        size={30}
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
};
export default BottomNavigator;

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: colors.primary,
    height: 50,
    elevation: 10,
    alignItems: 'center',
  },
});
