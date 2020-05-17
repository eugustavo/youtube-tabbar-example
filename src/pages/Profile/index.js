import React from 'react';
import { View, Text } from 'react-native';

const Profile = () => {
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
        Profile
      </Text>
    </View>
  );
};

export default Profile;
