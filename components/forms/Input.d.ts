import * as React from 'react';
export interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  state?: 'default' | 'focused' | 'filled' | 'error' | 'disabled';
  helper?: string;
  rightIcon?: React.ReactNode;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Input: React.FC<InputProps>;
export default Input;
