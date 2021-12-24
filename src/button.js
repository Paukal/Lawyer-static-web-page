import Button from 'react-bootstrap/Button';

export function ButtonScroll() {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return <Button onClick={handleScroll} variant="light">Kontaktai</Button>;

}