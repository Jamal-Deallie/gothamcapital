import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const numbersAnimation = (headingElem, statElem, containerElem) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let headingSplit = new SplitText(headingElem, {
    type: 'words',
  });

  gsap.set(headingSplit.words, { autoAlpha: 0, y: 50 });
  gsap.set(statElem, { autoAlpha: 0, y: 50 });

  let tl = gsap
    .timeline()
    .to(headingSplit.words, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'power2',
      stagger: 0.05,
    })

    .to(statElem, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'power2',
      stagger: 0.5,
    });

  ScrollTrigger.create({
    trigger: containerElem,
    start: 'top center',
    end: 'bottom 30px',
    toggleActions: 'play none none reverse',
    animation: tl,
    immediateRender: false,
  });
  return () => {
    ScrollTrigger.refresh();
  };
};
