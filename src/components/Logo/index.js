import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;

  svg {
    height: 4.2rem;
    max-height: 100%;
    width: 8.2rem !important;
  }
`;

const Logo = () => (
  <Wrapper>
    <FontAwesomeIcon icon={['fab', 'react']} />
  </Wrapper>
);

export default Logo;
