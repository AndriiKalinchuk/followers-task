import { Container, AppBar as AppBarMui } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { appBarStyle, containerStyle } from './AppBar.styled';

export const NavBar = () => {
  return (
    <AppBarMui position="static" sx={appBarStyle}>
      <Container sx={containerStyle}>
        <Navigation />
      </Container>
    </AppBarMui>
  );
};
