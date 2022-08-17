// import loader from './components/loader';
import scrollDown from './components/scroll-down';
// import pointer from './components/pointer';
import cookies from './components/cookies';
import menuToggle from './components/menu';

import { heroAnimations } from './sections/hero';
import aboutAnimations from './sections/about';
import portfolioAnimations from './sections/portfolio';
import contactAnimations from './sections/contact';

const contactLinkSupport = () => {
  if (window.location.href.indexOf('#contact') > -1) {
    window.scrollTo(0, document.body.scrollHeight);
  }

  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href.includes('#contact')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, document.body.scrollHeight);
      });
    }
  });
}

// loader();
scrollDown();
// pointer();
cookies();
menuToggle();
contactLinkSupport();

heroAnimations();
portfolioAnimations();
aboutAnimations();

if (!isMobile()) {
  contactAnimations();
}

// /* Helpers */
function isMobile() {
  return window.innerWidth <= 830 ? true : false;
}