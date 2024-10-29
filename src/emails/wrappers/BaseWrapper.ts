import { ReactNode } from 'react';

export interface BaseWrapperProps {
  children: ReactNode;
  previewText: string;
}

export interface BaseWrapper {
  (props: BaseWrapperProps): JSX.Element;
}
