/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';

const Header = ({ logo }) => {
  return (
    <>
      <header id='header'>
        <div class='holder'>
          <div class='logo-wrapper clearfix'>{logo}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
