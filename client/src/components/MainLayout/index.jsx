import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import { Container, ContentContainer, FooterContainer } from './styles';

export default function MainLayout() {
  return (
    <Container>
      <Navigation />
      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
