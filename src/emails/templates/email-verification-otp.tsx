import React from 'react';
import { withEmailWrapper } from '../wrappers/withEmailWrapper';
import { Section } from '@react-email/components';
import { Typography } from '../components/ui/typography';

interface EmailVerificationOTPProps {
  otp: string;
  recipientName: string;
}

const EmailVerificationOTPContent: React.FC<EmailVerificationOTPProps> = ({ otp, recipientName }) => {
  return (
    <>
      <Typography variant="h4" className="mb-6">
        Hello {recipientName},
      </Typography>
      <Typography variant="p" className="mb-4">
        Thank you for signing up with Ansopedia. To complete your registration, please use the following One-Time
        Password (OTP):
      </Typography>
      <Typography variant="h4">This is your OTP: {otp}</Typography>
      <Section className="bg-gray-100 rounded p-6 text-center my-6">
        <Typography variant="h1" className="m-0 text-black">
          {otp}
        </Typography>
      </Section>
      <Typography variant="p" className="mb-4">
        This OTP is valid for 10 minutes. If you didn't request this verification, please ignore this email.
      </Typography>
    </>
  );
};

export const EmailVerificationOTP = withEmailWrapper(EmailVerificationOTPContent, {
  wrapperType: 'default',
  previewText: 'Your Ansopedia Email Verification OTP',
});

export default EmailVerificationOTP;
