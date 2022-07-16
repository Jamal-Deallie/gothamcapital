import { useEffect, useRef } from 'react';
import { Image, Container, ImageWrapper, Name, Department } from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { batchAnimation } from '../../animations/batchAnimation';

export default function EmployeeContainer({ data }) {
  const containerRef = useRef();
  const [batchRef, setBatchRef] = useArrayRef();

  useEffect(() => {
    batchAnimation(batchRef.current, containerRef.current);
  });
  return (
    <Container ref={containerRef}>
      {data ? (
        data.map(item => {
          return (
            <ImageWrapper key={item._id} id='employees' ref={setBatchRef}>
              <Image src={item.image} alt={item.name} />
              <Name>{item.name} </Name>
              <Department>{item.department} </Department>
            </ImageWrapper>
          );
        })
      ) : (
        <ImageWrapper>
          <h1>Error Found</h1>
        </ImageWrapper>
      )}
    </Container>
  );
}
