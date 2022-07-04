import { gsap } from 'gsap';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import useArrayRef from '../../hooks/useArrayRef';
import {
  Wrapper,
  Quickflip,
  QBCard,
  QFCard,
  IconWrapper,
  Subheader,
  Caption,
  Image,
} from './styles.js';

export default function Card(props) {
  const [reversed, setReversed] = useState(false);

  const flipRef = useRef(null);
  const [cardRef, setCardRef] = useArrayRef();

  const timing = 1;

  useLayoutEffect(() => {
    gsap.set('.quickflip', {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000,
    });
    gsap.set('.qf-card', {
      transformStyle: 'preserve-3d',
      transformOrigin: '50% 50%',
    });
    gsap.set('.qf-back', {
      rotationY: 180,
      rotationZ: 180,
    });
  }, []);

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(cardRef.current, { rotationX: '+=180', duration: timing })
      .to(
        flipRef.current,
        { z: 50, duration: timing / 2, yoyo: true, repeat: 1 },
        0
      );
  }, [tl, cardRef, flipRef]);

  useEffect(() => {
    reversed ? tl.current.play() : tl.current.reverse();
  });

  return (
    <Wrapper>
      <Quickflip
        className='quickflip'
        onClick={() => {
          setReversed(reversed => !reversed);
        }}
        ref={flipRef}>
        <QFCard className='qf-card qf-front' ref={setCardRef}></QFCard>
        <QBCard className='qf-card qf-back' ref={setCardRef}>
          <Subheader> {props.headline}</Subheader>

          <Caption> {props.text}</Caption>
        </QBCard>
      </Quickflip>
    </Wrapper>
  );
}
