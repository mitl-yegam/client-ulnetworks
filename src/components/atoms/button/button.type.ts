import { CSSProperties } from 'react';

export type Props = {
  text: string | React.ReactNode;
  color?: string;
  bgColor?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  onClick?: (e: any) => void;
  disabled?: boolean;
};
