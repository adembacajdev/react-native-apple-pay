import { requireNativeComponent } from 'react-native';
import type { ApplePayButtonComponent } from '../types';
const ApplePayButtonNative =
  requireNativeComponent<ApplePayButtonComponent>('ApplePayButton');
export default ApplePayButtonNative;
