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
      emote="👳🏻‍♂️👋🏽"
      links={[
        <a href='https://github.com/surajgoraya'>github</a>,
        <a href='https://interfra.me'>music</a>,
      ]}/>
    </Page>
  )
}

export default Home;