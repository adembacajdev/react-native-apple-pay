import React from 'react';
import { Platform } from 'react-native';
import type { AccessibilityProps } from 'react-native';
import type { ButtonStyle, ButtonType } from '../types';
import ApplePayButtonNative from './ApplePayButtonNative';

/**
 *  Apple Pay Button Component Props
 */
export interface Props extends AccessibilityProps {
  buttonType?: ButtonType;
  buttonStyle?: ButtonStyle;
  cornerRadius?: number;
  onPress(): void;
  testID?: string;
  width?: number;
  height?: number;
}

/**
 *  Apple Pay Button Component
 *
 * @example
 * ```ts
 *  <ApplePayButton
 *    onPress={pay}
 *    style={styles.payButton}
 *    buttonType={"plain"}
 *    buttonStyle={"white"}
 *    width={120}
 *    height={44}
 *    cornerRadius={4}
 *  />
 * ```
 * @param __namedParameters Props
 * @returns JSX.Element
 * @category ReactComponents
 */
export function ApplePayButton({
  buttonType = 'plain',
  buttonStyle = 'black',
  onPress,
  width = 120,
  height = 44,
  cornerRadius = 4,
  ...props
}: Props) {
  /**This Components should not be shown on Android devices. */
  if (Platform.OS === 'android') return null;
  return (
    <ApplePayButtonNative
      onPress={onPress}
      buttonType={buttonType}
      buttonStyle={buttonStyle}
      cornerRadius={cornerRadius}
      width={width}
      height={height}
      {...props}
    />
  );
}
