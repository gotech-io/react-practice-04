import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`;

const Header = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      <h1>{text}</h1>
    </HeaderContainer>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
