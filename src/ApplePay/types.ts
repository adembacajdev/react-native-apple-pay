export interface ApplePayButtonComponent {
  buttonType?: ButtonType;
  buttonStyle?: ButtonStyle;
  cornerRadius?: number;
  onPress?: () => void;
  width?: number;
  height?: number;
}

export type ButtonType = 'plain' | 'buy' | 'setUp' | 'inStore';

export type ButtonStyle = 'white' | 'black' | 'whiteOutline';
