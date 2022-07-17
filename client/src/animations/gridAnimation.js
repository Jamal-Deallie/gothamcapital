import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);

export const gridAnimation = (
  headingElem,
  descElem,
  imgElem,
  containerElem
) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let lineSplit = new SplitText(descElem, {
    type: 'lines',
  });

  let wordSplit = new SplitText(headingElem, {
    type: 'words',
  });

let tl = gsap.timeline({
    onComplete() {
      lineSplit.revert();
      wordSplit.revert();
    },
  });
  gsap.set(imgElem, { autoAlpha: 0 });

  tl.to(
    imgElem,

    { duration: 1, ease: 'slow', autoAlpha: 1 }
  )
    .fromTo(
      wordSplit.words,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2',
        stagger: 0.05,
      },
      '-=1'
    )
    .fromTo(
      lineSplit.lines,
      {
        y: 40,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power4.out',
        overflow: 'hidden',
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
