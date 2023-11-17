import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
  canMakeApplePayPayments,
  ApplePayButton,
  makeApplePayPayment,
} from 'react-native-apple-pay';

export default function App() {
  const [canMakePayments, setCanMakePayments] = React.useState<boolean>(false);

  React.useEffect(() => {
    canMakeApplePayPayments().then(setCanMakePayments);
  }, []);

  const payWithApple = async () => {
    const result = await makeApplePayPayment(100, 'USD', 'Test', 'Test');
    console.log({ result });
  };

  return (
    <View style={styles.container}>
      {canMakePayments ? <ApplePayButton onPress={payWithApple} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
