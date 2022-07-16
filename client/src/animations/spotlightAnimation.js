import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const spotlightAnimation = (
  headingElem,
  descElem,
  imgElem,
  containerElem
) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let storyLineSplit = new SplitText(descElem, {
    type: 'lines',
  });

  gsap.set(imgElem, { autoAlpha: 0 });
  gsap.set(headingElem, { autoAlpha: 0 });
  gsap.set(storyLineSplit.lines, {
    y: 40,
    opacity: 0,
  });

  const tl = gsap
    .timeline()
    .to(headingElem, {
      duration: 1,
      autoAlpha: 1,
      ease: 'power2',
    })
    .to(storyLineSplit.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power4.out',
      overflow: 'hidden',
    })
    .to(imgElem, { duration: 2, ease: 'circ.out', autoAlpha: 1 }, '-=1');

  ScrollTrigger.create({
    trigger: containerElem,
    start: 'top center',
    end: 'bottom',
    toggleActions: 'play none none reverse',
    animation: tl,
    immediateRender: false,
  });

  return () => {
    ScrollTrigger.refresh();
  };
};
