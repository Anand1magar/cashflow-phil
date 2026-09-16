import * as React from 'react';
export interface HeaderAndStatusbarProps {
  progress?: number;
  onBack?: () => void;
  showBack?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare const HeaderAndStatusbar: React.FC<HeaderAndStatusbarProps>;
export default HeaderAndStatusbar;
