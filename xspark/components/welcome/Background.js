import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require('./assets/bk2.jpg')}
        style={{ height: '100%' }}
      >
        <View style={{position:"absolute"}}>
            {children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;
