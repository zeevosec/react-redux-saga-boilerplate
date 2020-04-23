import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container, utils } from 'styled-minimal';

import Logo from '../../components/Logo';

const { spacer } = utils;

const HomeContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: ${spacer(3)};
  text-align: center;

  svg {
    height: 10rem;
    width: auto;

    ${/* sc-custom '@media-query' */ utils.responsive({
      lg: `
        height: 15rem;
     `,
    })};
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.4;
  margin-bottom: ${spacer(3)};
  margin-top: 0;
  text-align: center;

  ${/* sc-custom '@media-query' */ utils.responsive({
    lg: `
      font-size: 4rem;
    `,
  })};
`;

const Red = styled.span`
  color: #e25555;
`;

const Home = () => {
  return (
    <HomeContainer verticalPadding>
      <Header>
        <Logo type="logo" />
      </Header>
      <Heading>Heading</Heading>
      <h2>Your App here!</h2>
      <p>
        Made with <Red>&hearts;</Red> by <a href="https://twitter.com/zeevosec">Shane O'Neill</a>
      </p>
    </HomeContainer>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
