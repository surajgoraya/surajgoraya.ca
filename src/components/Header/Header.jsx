import Emoji from 'a11y-react-emoji';
import React from 'react';
import HeaderStyles from './Header.module.scss';

/**
 * 
 * @param {Object} props 
 * @returns {JSX.Element}
 */
const Header = (props) => {
  return (
    <div className={HeaderStyles['header']}>
      <div className={HeaderStyles['header__content']}>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <div className={HeaderStyles['header__links']}>
          {props.links ? props.links : null}
        </div>
      </div>
      {props.cta ? 
        <div className={HeaderStyles['header__cta']}>
          button
        </div>
        : <div className={HeaderStyles['header__emotes']}>
          <Emoji symbol={props.emote} />
        </div>}
    </div>
  )
}

export default Header;