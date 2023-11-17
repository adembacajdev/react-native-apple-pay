# @adembacaj/react-native-apple-pay

Apple Pay native modules for React-Native

## Installation

```sh
npm install @adembacaj/react-native-apple-pay
or
yarn add @adembacaj/react-native-apple-pay
```

## iOS Extra Actions

```sh
npx pod-install
or
cd ios && pod install
```

### Check canMakeApplePayPayments

Before using Apple Pay, if you want to enable/disable or show/hide Apple Pay button, you need to call this function to check if device is ready to pay or not.

```js
import { canMakeApplePayPayments } from '@adembacaj/react-native-apple-pay';

const canPayWithApple: boolean = await canMakeApplePayPayments();
```

### Direct Apple Payment

You can use different payment gateways, but you can also use direct payment.

```js
import { makeApplePayPayment } from '@adembacaj/react-native-apple-pay';

// ...
//Check if device/creditcard is ready to pay
if (canPayWithApple) {
  const result = await makeApplePayPayment(100, 'USD', 'Test', 'Test');
  Alert.alert('Results', results);
}
```

### ApplePayButton

You can also use Apple Pay Button.

```js
import { ApplePayButton } from 'react-native-apple-pay';

const App = () => {
  return (
    <ApplePayButton
      buttonType={'plain'} // 'plain' | 'inStore' | 'buy' | 'setUp'
      buttonStyle={'black'} // 'black' | 'white' | 'whiteOutline'
      onPress={() => console.log('payWithApple')}
      width={120}
      height={44}
      cornerRadius={4}
    />
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
