import React from 'react';
import { Section, Row, Column, Link, Text, Img } from '@react-email/components';

export const Footer: React.FC = () => {
  return (
    <Section className="bg-black p-5 rounded-b-lg text-center">
      <Text className="text-white text-sm mb-2">Follow us on:</Text>
      <Row>
        <Column align="center">
          <Link href="https://twitter.com/ansopedia" className="inline-block mx-2 p-1 rounded">
            <Img
              src="https://res.cloudinary.com/ddhtmkllj/image/upload/v1729678227/ansopedia/email/twitter_x_email_template_rxtxk9.svg"
              width="24"
              height="24"
              alt="X"
              className="block"
            />
          </Link>
          <Link href="https://facebook.com/ansopedia" className="inline-block mx-2 p-1 rounded">
            <Img
              src="https://res.cloudinary.com/ddhtmkllj/image/upload/v1729678378/ansopedia/email/facebook_email_template_nltp99.svg"
              width="24"
              height="24"
              alt="Facebook"
              className="block"
            />
          </Link>
          <Link href="https://instagram.com/ansopedia" className="inline-block mx-2 p-1 rounded">
            <Img
              src="https://res.cloudinary.com/ddhtmkllj/image/upload/v1729678815/ansopedia/email/instagram_email_template_u8mf2b.svg"
              width="24"
              height="24"
              alt="Instagram"
              className="block"
            />
          </Link>
        </Column>
      </Row>
      <Text className="text-white text-sm mt-2">©2024 Ansopedia. All rights reserved.</Text>
    </Section>
  );
};

export default Footer;
