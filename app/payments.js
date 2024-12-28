import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router';

function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Payment Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('details')} />
    </View>
  );
}

export default PaymentScreen;
