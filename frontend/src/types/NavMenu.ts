import { ReactElement } from 'react';

export interface NavMenu {
  key: string;
  label: string;
  icon: ReactElement;
  children?: NavMenu[];
}
