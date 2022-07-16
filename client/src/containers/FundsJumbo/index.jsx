import { Jumbotron } from '../../components';

export default function FundsJumbo() {
  return (
    <Jumbotron
      header1={'A Track'}
      header2={'of'}
      italic1={'Success'}
      italic2={'Record'}
      desc={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
      }
      img={'images/general/4623080.jpg'}
      alt={'Gotham Capital Meeting'}
    />
  );
}
