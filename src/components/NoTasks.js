import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function NoTasks() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/noTasks.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{'Adicione sua\nprimeira task!'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10
  },
  text: {
    fontFamily: fonts.balsamiqRegular,
    color: colors.black,
    textAlign: 'center',
    fontSize: 22
  }
})