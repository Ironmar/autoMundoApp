import React from 'react';
import {StyleSheet, View} from 'react-native';
const Container = ({children, color = '#fff', padding = 10}) => {
  return (
    <View
      style={{...styles.container, backgroundColor: color, padding: padding}}>
      {children}
    </View>
  );
};
export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
