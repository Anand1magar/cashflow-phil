import * as React from 'react';
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
