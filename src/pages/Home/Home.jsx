import React from 'react';
import Header from '../../components/Header/Header';
import Page from '../../components/Page/Page';

/**
 * 
 * @param {Object} props 
 * @returns {JSX.Element}
 */
const Home = (props) => {
  return (
    <Page title={'home'}>
      <Header 
      title="hi, i'm suraj"
      subtitle="fourth year computer science student."
      emote="👳🏻‍♂️👋🏽"/>
    </Page>
  )
}

export default Home;