import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image, Container, ImageWrapper, Name, Department } from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { batchAnimation } from '../../animations/batchAnimation';

export default function EmployeeContainer({ data }) {
  const containerRef = useRef();
  const [batchRef, setBatchRef] = useArrayRef();

  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let targets = gsap.utils.toArray('#employees');
  //   gsap.set(targets, { opacity: 0 });
  //   ScrollTrigger.batch(targets, {
  //     trigger: '#section2',
  //     markers: true,
  //     start: 'top center',
  //     end: 'bottom',
  //     //reset after the trigger
  //     toggleActions: 'play none none reset',
  //     invalidateOnRefresh: true,
  //     onEnter: batch =>
  //       gsap.fromTo(
  //         batch,
  //         { opacity: 0, y: 100 },
  //         { opacity: 1, y: 0, stagger: 0.1 }
  //       ),
  //   });
  //   return () => {
  //     ScrollTrigger.refresh();
  //   };
  // }, []);
  // console.log(data);

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
