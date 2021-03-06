import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const batchAnimation = (batchElem, containerElem) => {
  gsap.set(batchElem, { autoAlpha: 0, y: 100 });

  ScrollTrigger.batch(batchElem, {
    trigger: containerElem,
    start: 'top center',
    end: 'bottom',
    //reset after the trigger
    toggleActions: 'play none none reset',
    invalidateOnRefresh: true,
    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.1 }),
  });

  return () => {
    ScrollTrigger.refresh();
  };
};
