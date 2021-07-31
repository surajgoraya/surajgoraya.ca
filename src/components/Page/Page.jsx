import React, { useEffect } from 'react';
import { WEBSITE_NAME } from '../../constants';
import PageStyles from './Page.module.scss';

/**
 * 
 * @param {Object} props 
 * @returns {JSX.Element}
 */
const Page = (props) => {
  
  const { title } = props;

  useEffect(() => {
    if (title) {
      document.title = `${WEBSITE_NAME} - ${title}`;
    } else {
      document.title = WEBSITE_NAME;
    }
  }, []); //This will trigger on mount.

  return (
    <div className={PageStyles['page']}>
      {props.children}
    </div>
  )
}

export default Page;