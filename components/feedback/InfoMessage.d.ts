import * as React from 'react';
export interface InfoMessageProps {
  icon?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare const InfoMessage: React.FC<InfoMessageProps>;
export default InfoMessage;
