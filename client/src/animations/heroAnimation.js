import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = (headingElem, containerElem) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let wordSplit = new SplitText(headingElem, {
    type: 'words',
  });

  let tl = gsap.timeline({
    onComplete() {
      wordSplit.revert();
    },
  });

  tl.fromTo(
    wordSplit.words,
    { opacity: 0, y: 200, skewY: 40 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.5,
      ease: 'power2',
      stagger: 0.07,
    }
  );

  let st = ScrollTrigger.create({
    trigger: containerElem,
    start: 'top center',
    end: 'bottom 30px',
    animation: tl,
  });
  return () => {
    containerElem.progress(1); // reverts the SplitText in the onComplete
    st.kill();
  };
};
