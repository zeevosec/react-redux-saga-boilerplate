import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  svg {
    height: 4.2rem;
    max-height: 100%;
    width: auto;
  }
`;

const Logo = () => (
  <Wrapper>
    <FontAwesomeIcon icon="react" />
  </Wrapper>
);

export default Logo;
