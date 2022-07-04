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
} from '../../containers';

export default function TeamsPage() {
  return (
    <>
      <Jumbotron title='Our Team' />
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
