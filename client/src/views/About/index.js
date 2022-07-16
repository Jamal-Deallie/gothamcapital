import { Jumbotron } from '../../components';

import {
  DiversityContainer,
  CommunityContainer,
  VisionContainer,
  PrinciplesContainer,
  AboutJumboContainer
} from '../../containers';

export default function AboutPage() {
  return (
    <>
      <AboutJumboContainer/>
      <CommunityContainer />
      <DiversityContainer />
      <PrinciplesContainer />
      <VisionContainer />
    </>
  );
}
