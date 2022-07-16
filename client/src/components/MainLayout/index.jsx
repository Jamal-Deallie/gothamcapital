import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import {
  Container,
  ContentContainer,
  FooterContainer,
  NavigationContainer,
} from './styles';

export default function MainLayout() {
  return (
    <Container>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
