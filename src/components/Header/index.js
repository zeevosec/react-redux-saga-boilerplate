import React from 'react';
import styled from 'styled-components';

import { Container, utils } from 'styled-minimal';
import Logo from '../Logo';

import { appColor, headerHeight } from '../../modules/theme';

const { spacer } = utils;

const HeaderWrapper = styled.header`
  background-color: #113740;
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

export default class Header extends React.PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Logo />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
