import React from 'react';
import styled from 'styled-components';

import { Container, Flex } from 'styled-minimal';

const FooterWrapper = styled.footer`
  border-top: 0.1rem solid #ddd;
`;

const Footer = () => (
  <FooterWrapper>
    <Container py={3}>
      <Flex justifyContent="space-between" />
    </Container>
  </FooterWrapper>
);

export default Footer;
