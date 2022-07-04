import {
  Text,
  Heading,
  Title,
  Desc,
  Container,
  ContentContainer,
  Section,
  Wrapper,
  GridContainer,
} from './styles';
import { ServicesItems } from '../../shared/sharedData';
import { Card } from '../../components';

export default function ServicesContainer() {
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
  
            <Title>Services Offered</Title>
            <Heading>
              Investing is Only Gambling if you don't have a plan
            </Heading>
     
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <GridContainer>
          {ServicesItems.map(items => {
            return (
              <div key={items.id}>
                <Card
                  imgUrl={items.imgUrl}
                  headline={items.headline}
                  text={items.text}
                  alt={items.alt}
                />
              </div>
            );
          })}
        </GridContainer>
      </Wrapper>
    </Section>
  );
}
