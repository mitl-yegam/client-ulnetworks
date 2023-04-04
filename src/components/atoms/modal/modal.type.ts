import { CSSProperties } from 'react';
export type Props = {
  open: boolean;
  handler: () => void;
  style?: CSSProperties;
  children: React.ReactNode;
};
