import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const whatFont = (size) => {
  switch (size) {
    case 'sm':
      return '12px';
    case 'md':
      return '24px';
    default:
      return '48px';
  }
}

export const MainHeader = styled.h1`
  color: purple;
  font-size: ${ props => whatFont(props.size) };
  background: grey;
  text-align: center;
`

export const MainNav = styled(Nav.Link)`
  color: blue;
  text-decoration: none;
`