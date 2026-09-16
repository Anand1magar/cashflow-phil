import * as React from 'react';
export interface RadioButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  supportingText?: boolean;
  device?: "mobile" | "desktop";
  borderless?: boolean;
  selected?: boolean;
  text?: boolean;
  state?: "enabled" | "hovered" | "focused" | "pressed" | "disabled";
  /** Text content; defaults to "Here". */
  text1?: string;
  /** Text content; defaults to "Supporting label". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const RadioButtons: React.FC<RadioButtonsProps>;
export default RadioButtons;
