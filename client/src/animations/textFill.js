import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const textFill = (textElem, containerElem) => {
  //register ScrollTrigger & SplitText

  const animation = gsap.to(textElem, {
    backgroundImage:
      'linear-gradient(90deg, #f3f3f3  0%, #f3f3f3  100%, #444 100%)',
    duration: 1,
    ease: 'power1',
    stagger: {
      each: 0.2,
      ease: 'power2.out',
    },
  });

  ScrollTrigger.create({
    trigger: containerElem,
    start: 'top center',
    end: 'bottom',
    animation: animation,
  });

  return () => {
    ScrollTrigger.refresh();
  };
};
