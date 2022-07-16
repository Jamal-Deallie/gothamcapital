import { GridLayout } from '../../components';

export default function VisionContainer() {
  return (
    <GridLayout
      heading='Helping Innovators Invest With Purpose'
      desc='Vivamus magna justo, lacinia eget consectetur sed, convallis at
    tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
    ante ipsum primis in faucibus orci luctus et ultrices posuere
    cubilia Curae. Donec velit neque, auctor sit amet aliquam vel'
      img={'images/general/business-meeting.jpg'}
      alt={'Gotham Capital Meeting'}
      filter={true}
      order={true}
    />
  );
}
