import React from 'react';
import { withEmailWrapper } from '../wrappers/withEmailWrapper';
import { Section, Text } from '@react-email/components';

interface EmailVerificationOTPProps {
  otp: string;
  recipientName: string;
}

const EmailVerificationOTPContent: React.FC<EmailVerificationOTPProps> = ({ otp, recipientName }) => {
  return (
    <>
      <Text className="text-xl font-bold mb-6">Hello {recipientName},</Text>
      <Text className="text-base leading-7 mb-4">
        Thank you for signing up with Ansopedia. To complete your registration, please use the following One-Time
        Password (OTP):
      </Text>
      <Section className="bg-gray-100 rounded p-6 text-center my-6">
        <Text className="text-4xl font-bold m-0 text-black">{otp}</Text>
      </Section>
      <Text className="text-base leading-7 mb-4">
        This OTP is valid for 10 minutes. If you didn't request this verification, please ignore this email.
      </Text>
    </>
  );
};

export const EmailVerificationOTP = withEmailWrapper(EmailVerificationOTPContent, {
  wrapperType: 'default',
  previewText: 'Your Ansopedia Email Verification OTP',
});

export default EmailVerificationOTP;
