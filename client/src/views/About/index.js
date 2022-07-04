import { Jumbotron } from '../../components';

import {
  StoryContainer,
  ValuesContainer,
  ObjectiveContainer,
  CommunityContainer,
  VisionContainer,
  PrinciplesContainer,
  PhilosophyContainer,
} from '../../containers';

export default function AboutPage() {
  return (
    <>
      <Jumbotron title='About Us' />
      <StoryContainer />
      {/* <ValuesContainer /> */}

      <CommunityContainer />

      <ObjectiveContainer />
      <PrinciplesContainer />

      <VisionContainer />
    </>
  );
}
