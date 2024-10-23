import { render } from '@react-email/components';
import { EmailVerificationOTP } from '@/emails';
import { EmailNotification } from './email.validation';

export const renderEmail = ({ eventType, payload }: EmailNotification) => {
  if (eventType === 'sendEmailVerificationOTP') {
    return render(<EmailVerificationOTP {...payload} />);
  }

  return;
};
