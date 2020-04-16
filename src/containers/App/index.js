import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled, { ThemeProvider } from 'styled-components';

import history from 'modules/history';
import theme from '../../modules/theme';

import Home from '../Home';

import Footer from '../../components/Footer';
import GlobalStyles from '../../components/GlobalStyles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const Main = styled.main`
  min-height: 100vh;
`;

export class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Helmet />
            <Main>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </Main>
            <Footer />
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
