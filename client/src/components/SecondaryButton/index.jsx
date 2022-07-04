import { StyledButton } from './styles';
import PropTypes from 'prop-types';

export default function SecondaryButton(props) {
  return (
    <StyledButton
      //   to={props.link}
      //   $backgroundColor={props.backgroundColor}
      //   $borderWidth={props.borderWidth}
      //   $borderStyle={props.borderStyle}
      $fontColor={props.fontColor}
      $borderColor={props.borderColor}>
      {props.children}
    </StyledButton>
  );
}

// Button.propTypes = {
//   label: PropTypes.node.isRequired,
//   link: PropTypes.string.isRequired,
//   bgColor: PropTypes.string,
//   border: PropTypes.string,
//  fontColor: PropTypes.string,
// };

// $border={}
// $bgColor={}
// $textColor={}
