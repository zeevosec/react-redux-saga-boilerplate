import PropTypes from 'prop-types';
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
  min-height: 100vh;
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

export class Home extends React.Component {
  render() {
    return (
      <HomeContainer verticalPadding>
        <Header>
          <Logo type="logo" />
        </Header>
        <Heading>Heading</Heading>
        <h1>test</h1>
      </HomeContainer>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
