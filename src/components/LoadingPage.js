import React from 'react';
import { Image, View } from 'react-native';

export function LoadingPage() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF7F50'
      }}
    > 
      <Image
        source={require('../../assets/splash.png')}
        style={{
          width: '100%',
          resizeMode: 'contain'
        }}
      />
    </View>
  )
}