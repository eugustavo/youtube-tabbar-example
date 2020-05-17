import React from 'react';
import { View, Text } from 'react-native';

const Search = () => {
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
        Search
      </Text>
    </View>
  );
};

export default Search;
