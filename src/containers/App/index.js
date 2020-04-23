import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled, { ThemeProvider } from 'styled-components';

import history from '../../modules/history';
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

const App = () => {
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
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
