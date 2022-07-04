import { gsap } from 'gsap';

export const hoverOnEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, { clipPath: 'circle(100%)' });
};

export const hoverOnLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { clipPath: 'circle(0%)' });
};
