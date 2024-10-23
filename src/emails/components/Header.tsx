import React from 'react';
import { Section, Row, Column, Img, Text } from '@react-email/components';

export const Header: React.FC = () => {
  return (
    <Section className="bg-black rounded-t-lg p-6">
      <Row className="flex justify-between items-center">
        <Column>
          <Img
            src="https://avatars.githubusercontent.com/u/123801647?s=200&v=4"
            width="40"
            height="40"
            alt="Ansopedia Logo"
            className="inline-block align-middle mr-2"
          />
        </Column>
        <Column>
          <Text className="text-white text-2xl font-bold font-sans m-0 uppercase tracking-wider inline-block align-middle">
            Ansopedia
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default Header;
