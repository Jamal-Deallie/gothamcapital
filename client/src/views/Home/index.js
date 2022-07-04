import React from 'react';

import {
  HeroContainer,
  AboutContainer,
  ApartContainer,
  RecordContainer,
  CTAContainer,
  StandardsContainer,
  CultureContainer,
  SpotlightContainer,
  AwardsContainer,
  ResultsContainer,
} from '../../containers';

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <AboutContainer />
      <CultureContainer />
      {/* <ApartContainer /> */}
      {/* <StandardsContainer /> */}
      {/* <SpotlightContainer />
      <AwardsContainer /> */}
      <ResultsContainer />
      <RecordContainer />
      <CTAContainer />
    </>
  );
}
