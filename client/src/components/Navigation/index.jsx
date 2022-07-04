import { useRef, useEffect, useState } from 'react';
import {
  HeaderSection,
  Container,
  NavLinks,
  Logo,
  Hamburger,
  Button,
  IconBar,
  ToggleBtn,
  MobileContainer,
} from './styles';
import { Link } from 'react-router-dom';
import { NavItems } from '../../shared/sharedData';
import { gsap } from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navigation() {
  const tl = useRef();
  const menuRef = useRef(null);
  const [iconRef, setIconRef] = useArrayRef();
  const [linkRef, setLinkRef] = useArrayRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline({ pause: true });

    tl.current
      .to(
        iconRef.current[0],
        {
          transform: 'rotate(45deg) translate(10px, 7.5px)',
        },
        0
      )
      .to(
        iconRef.current[1],
        {
          opacity: 0,
        },
        0
      )
      .to(
        iconRef.current[2],
        {
          transform: 'rotate(-45deg) translate(7px, -6px)',
        },
        0
      )
      //add duration
      .to(menuRef.current, {
        clipPath: 'circle(140% at 95.3% 8.5%)',
      });
  }, [tl, iconRef, linkRef, menuRef]);

  let links = NavItems.map(item => {
    return (
      <li key={item.id} ref={setLinkRef}>
        <NavLinks to={item.link}>{item.label}</NavLinks>
      </li>
    );
  });

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
    if (toggle) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  },[tl, toggle]);

  return (
    <HeaderSection>
      <Link to='/'>
        <Logo src='/images/logos/logo.svg' alt='Gotham Logo' />
      </Link>
      <Container>{links}</Container>
      <MobileContainer ref={menuRef}>{links}</MobileContainer>
      <ToggleBtn
        onClick={() => {
          setToggle(toggle => !toggle);
        }}>
        <IconBar ref={setIconRef} />
        <IconBar ref={setIconRef} />
        <IconBar ref={setIconRef} />
      </ToggleBtn>
    </HeaderSection>
  );
}
