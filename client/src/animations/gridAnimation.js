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

  let storyLineSplit = new SplitText(descElem, {
    type: 'lines',
  });

  let wordSplit = new SplitText(headingElem, {
    type: 'words',
    linesClass: 'headingChildren',
  });

  gsap.set(imgElem, { autoAlpha: 0 });
  gsap.set(storyLineSplit.lines, {
    y: 40,
    opacity: 0,
    fontFamily: 'freight-display-pro, serif',
  });
  const tl = gsap
    .timeline()
    .from(wordSplit.words, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2',
      stagger: 0.05,
    })
    .to(storyLineSplit.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power4.out',
      overflow: 'hidden',
    })
    .to(
      imgElem,

      { duration: 2, ease: 'slow', autoAlpha: 1 },
      '-=1'
    );

  ScrollTrigger.create({
    trigger: containerElem,
    markers: true,
    start: 'top center',
    end: 'bottom 30px',
    toggleActions: 'play none none reverse',
    animation: tl,
    immediateRender: false,
  });

  window.addEventListener('resize', function () {
    storyLineSplit.lines.revert();
  });
  return () => {
    ScrollTrigger.refresh();
  };
};
