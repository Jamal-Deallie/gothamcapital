import { useState, useEffect } from 'react';
import { Button, Text } from './styles';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop}>
      <Text>Scroll To The Top</Text>
    </Button>
  );
}
