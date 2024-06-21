import PropTypes from 'prop-types';
import HeaderWelcome from "./HeaderWelcome.jsx";
import HeaderQuiz from "./HeaderQuiz.jsx";
import HeaderMenu from "./HeaderMenu.jsx";

const Header = ({ type }) => {
  switch (type) {
      case 'welcome':
          return <HeaderWelcome />
      case 'quiz':
          return <HeaderQuiz />
      case 'menu':
          return <HeaderMenu />
  }
};

Header.propTypes = {
  type: PropTypes.oneOf(['welcome', 'quiz', 'menu']).isRequired,
};

export default Header;

