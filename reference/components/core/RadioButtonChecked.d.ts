import * as React from 'react';
export interface RadioButtonCheckedProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "filled" | "outlined" | "round" | "sharp" | "two tone";
}
export declare const RadioButtonChecked: React.FC<RadioButtonCheckedProps>;
export default RadioButtonChecked;
