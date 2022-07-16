import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const headerAnimation = (
  headingElem,
  containerElem
) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let wordSplit = new SplitText(headingElem, {
    type: 'words',
    linesClass: 'headingChildren',
  });

  gsap.set(wordSplit.words, {
    y: 40,
    autoAlpha: 0,
  });
  const tl = gsap.timeline().to(wordSplit.words, {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    ease: 'power2',
    stagger: 0.05,
  });

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
