import { gsap } from "gsap";
import TextPlugin from "../../../gsap-public/src/TextPlugin";

const loader = () => {
  // gsap.registerPlugin(TextPlugin);

  const loader = document.querySelector('.loader');
  const tl = gsap.timeline();

  // tl
  // .addLabel('tidyUp')
  // .to(scrollDown, 0.3, {opacity: 0})
  // .to(logo, 0.4, {translateY: window.innerHeight / 2 - 70}, 'tidyUp')
  // .addLabel('moveWrappers')
  // .to(asideWrapper, 0.5, {translateX: window.innerWidth - 100, backgroundColor: '#ffffff'})
  // .to(navWrapper, 0.5, {translateX: 0}, 'moveWrappers')
  // .addLabel('burgerTransformation')
  // .to(burgerSpans[1], 0.4, {opacity: 0})
  // .to(burgerSpans[0], 0.4, {translateY: 12, rotate: 45}, 'burgerTransformation')
  // .to(burgerSpans[2], 0.4, {translateY: -10, rotate: -45}, 'burgerTransformation')
  // .to(burgerText, {text: 'Close'}, 'burgerTransformation');
 
}

export default loader;