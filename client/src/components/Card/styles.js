import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Quickflip = styled.div`
  cursor: pointer;
  position: relative;
  width: 250px;
  height: 378px;
  border-radius: 1rem;
`;

export const QBCard = styled.div`
  background: url('/images/back.svg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  padding: 5.5rem;
`;

export const QFCard = styled.div`
  position: absolute;
  background: url('/images/test.svg');
  background-size: cover;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
`;

export const IconWrapper = styled.div`
  height: 60%;
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Column = styled.div`
  width: 300px;
`;

export const Subheader = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.variant.secondary};
  text-align: center;
  line-height: 2.4rem;
  margin-top: 5rem;
`;

export const Caption = styled.p`
  font-size: 14px;
  padding: 2.5rem 0;
`;
