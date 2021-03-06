import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";
import TextPlugin from "../../../gsap-public/src/TextPlugin";

const menuToggle = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  let menuActive = false;

  const asideWrapper = document.querySelector('.aside');
  const burger = document.querySelector('.burger');
  const burgerLines = document.querySelectorAll('.burger__line');
  const burgerText = document.querySelector('.burger__text');
  const logo = document.querySelector('.aside__logo');
  const scrollDown = document.querySelector('.scroll-down');

  const navWrapper = document.querySelector('.nav');

  const menuOpenTl = gsap.timeline();
  const menuCloseTl = gsap.timeline();

  burger.addEventListener('click', () => {
    if (!menuActive) {
      menuOpenTl
      .addLabel('tidyUp')
      .to(scrollDown, 0.3, {opacity: 0})
      .to(logo, 0.4, {translateY: window.innerHeight / 2 - 70}, 'tidyUp')
      .addLabel('moveWrappers')
      .to(asideWrapper, 0.5, {translateX: window.innerWidth - 100, backgroundColor: '#ffffff'})
      .to(navWrapper, 0.5, {translateX: 0}, 'moveWrappers')
      .addLabel('burgerTransformation')
      .to(burgerLines[1], 0.4, {opacity: 0})
      .to(burgerLines[0], 0.4, {translateY: 12, rotate: 45}, 'burgerTransformation')
      .to(burgerLines[2], 0.4, {translateY: -10, rotate: -45}, 'burgerTransformation')
      .to(burgerText, {text: 'Close'}, 'burgerTransformation');

      menuActive = true;
    } else {
      closeMenu();

      menuActive = false;
    }
  });

  function closeMenu() {
    menuCloseTl
    .addLabel('moveWrappers')
    .to(asideWrapper, {translateX: 0, backgroundColor: 'rgba(229, 229, 229, 0.2)'})
    .to(navWrapper, {translateX: '-100%'}, 'moveWrappers')
    .addLabel('burgerAndOtherTransformations')
    .to(scrollDown, {opacity: 1}, 'burgerAndOtherTransformations')
    .to(logo, {translateY: 0}, 'burgerAndOtherTransformations')
    .to(burgerLines[1], {opacity: 1}, 'burgerAndOtherTransformations')
    .to(burgerLines[0], {translateY: 0, rotate: 0}, 'burgerAndOtherTransformations')
    .to(burgerLines[2], {translateY: 0, rotate: 0}, 'burgerAndOtherTransformations')
    .to(burgerText, {text: 'Menu'}, 'burgerAndOtherTransformations');
  }


  const menuWrapper = document.querySelector('.nav__menu');
  menuWrapper.addEventListener('click', (e) => {
    if (e.target.nodeName == 'A') {
      closeMenu();
    }
  });
}

export default menuToggle;