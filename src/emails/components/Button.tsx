import { Button as EmailButton } from '@react-email/components';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmailButton className="bg-indigo-600 rounded font-semibold text-white text-base no-underline text-center block py-3 px-6">
      {children}
    </EmailButton>
  );
};

export default Button;
