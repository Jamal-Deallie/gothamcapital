import { StyledButton } from './styles';
import PropTypes from 'prop-types';

export default function MainButton(props) {
  return (
    <StyledButton
    //  onClick={props.func}
    //$fontColor={props.color}
    >
      {props.children}
    </StyledButton>
  );
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   func: PropTypes.func.isRequired
//  fontColor: PropTypes.string,
// };

// $border={}
// $bgColor={}
// $textColor={}
