import { Jumbotron } from '../../components';
export default function AboutJumbo() {
  return (
    <Jumbotron
      header1={'Who we'}
      header2={'Where we'}
      italic1={'are'}
      italic2={'stand'}
      desc={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
      }
      img={'images/general/about-jumbo.png'}
      alt={'Gotham Capital Meeting'}
    />
  );
}
