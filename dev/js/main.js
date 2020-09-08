import scrollDown from './components/scroll-down';
import pointer from './components/pointer';
import cookies from './components/cookies';
import { menuToggle, nav } from './components/menu';

import heroAnimations from './sections/hero';
import aboutAnimations from './sections/about';
import portfolioAnimations from './sections/portfolio';
import contactAnimations from './sections/contact';

scrollDown();
pointer();
cookies();
menuToggle();
nav();

heroAnimations();
aboutAnimations();
portfolioAnimations();
contactAnimations();

// /* Helpers */
// function isMobile() {
//   return window.innerWidth <= 1024 ? true : false;
// }