import { Html, Head, Preview, Body, Container, Section, Tailwind } from '@react-email/components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BaseWrapper, BaseWrapperProps } from './BaseWrapper';

export const DefaultWrapper: BaseWrapper = ({ children, previewText }: BaseWrapperProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans px-2">
          <Container className="mx-auto py-5 w-full max-w-[600px]">
            <Header />
            <Section className="bg-white p-6 rounded shadow">{children}</Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
