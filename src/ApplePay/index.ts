import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ApplePaymentModule = NativeModules.PaymentsSdk
  ? NativeModules.PaymentsSdk
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const throwError = () => {
  throw new Error(`Apple Pay is for iOS only`);
};

const MockedObject = {
  setEnvironment: throwError,
  isReadyToPay: throwError,
  requestPayment: throwError,
  environments: {
    TEST: 0,
    PRODUCTION: 0,
  },
};

const APay = Platform.OS === 'ios' ? ApplePaymentModule : MockedObject;

export function makeApplePayPayment(
  amount: number,
  currencyCode: string,
  merchantId: string,
  countryCode: string
): Promise<void> {
  return APay.makePayment(amount, currencyCode, merchantId, countryCode);
}

export function canMakeApplePayPayments(): Promise<boolean> {
  return APay.canMakePayments();
}

export const ApplePay = {
  makeApplePayPayment,
  canMakeApplePayPayments,
};

export const useApplePay = () => {
  return { ...ApplePay };
};

export { ApplePayButton } from './components/ApplePayButton';
