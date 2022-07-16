import { Jumbotron } from '../../components';

import {
  LeadershipContainer,
  CarouselContainer,
  LeadersContainer,
  TeamsContainer,
  DiversityContainer,
  WorkingContainer,
  SpotlightContainer,
  AwardsContainer,
  TeamJumboContainer
} from '../../containers';

export default function TeamsPage() {
  return (
    <>
      <TeamJumboContainer/>
      <SpotlightContainer />
      {/* <DiversityContainer /> */}
      {/* <LeadershipContainer />
      <LeadersContainer /> */}
      {/* <AwardsContainer /> */}
  
      <TeamsContainer />
      {/* <WorkingContainer/> */}
    </>
  );
}
