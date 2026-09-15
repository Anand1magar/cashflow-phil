import * as React from 'react';
export interface MyPhilButtonExtendedProps {
  className?: string;
  style?: React.CSSProperties;
  showLabel?: boolean;
  buttonLabel?: string;
  device?: "desktop" | "mobile";
  showRightIcon?: boolean;
  iconRight?: React.ReactNode;
  hirerarchy?: "primary" | "secondary" | "tertiary" | "link";
  iconLeft?: React.ReactNode;
  showLeftIcon?: boolean;
  state?: "hover" | "default" | "clicked" | "disabled";
}
export declare const MyPhilButtonExtended: React.FC<MyPhilButtonExtendedProps>;
export default MyPhilButtonExtended;
