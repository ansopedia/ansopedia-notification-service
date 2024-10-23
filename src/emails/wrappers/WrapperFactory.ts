import { BaseWrapper } from './BaseWrapper';
import { DefaultWrapper } from './DefaultWrapper';

type WrapperType = 'default' | 'minimal' | 'branded';

const emailWrappers: Record<WrapperType, BaseWrapper> = {
  default: DefaultWrapper,
  minimal: DefaultWrapper, // Replace with MinimalWrapper when implemented
  branded: DefaultWrapper, // Replace with BrandedWrapper when implemented
};

export const getEmailWrapper = (type: WrapperType = 'default'): BaseWrapper => {
  return emailWrappers[type];
};
