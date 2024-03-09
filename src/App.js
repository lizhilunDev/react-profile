import { Reset } from 'styled-reset';
import Gnb from './components/Gnb/Gnb';
import Page from './pages/Page';
import React from 'react';

function App() {
  return (
    <>
      <Reset />
      <Gnb></Gnb>
      <Page></Page>
    </>
  );
}

export default App;
