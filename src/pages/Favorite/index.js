import React from 'react';
import { View, Text } from 'react-native';

const Favorite = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#555' }}>
        Favorite
      </Text>
    </View>
  );
};

export default Favorite;
