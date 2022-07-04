import { Jumbotron } from '../../components';

import {
  ObjectiveContainer,

  ServeContainer,
} from '../../containers';



export default function ApproachPage() {
  return (
    <>

        <Jumbotron title='Our Approach' />

        <ObjectiveContainer />
        {/* <PrinciplesContainer />
   
        <PhilosophyContainer /> */}
        <ServeContainer />
 
    </>
  );
}
