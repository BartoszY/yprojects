import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";
import Sine from "../../../gsap-public/src/EasePack";

const heroAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroElements = document.querySelectorAll(['.hero__title', '.hero__subtitle', '.hero .buttons']);
  const titles = document.querySelectorAll('.hero__title__row span');
  const subtitle = document.querySelector('.hero__subtitle');
  const buttons = document.querySelectorAll('.hero .buttons .button');

  const tl = gsap.timeline({delay: 0.5});

  tl.to(titles, .8, {opacity: 1, translateY: 0, stagger: 0.1})
    .from(subtitle, .4, {opacity: 0, translateY: '50px'})
    .to(buttons, .3, {opacity: 1, translateY: 0, stagger: 0.1});

  gsap.to(
    heroElements, 
    {opacity: 0, translateY: '-40%', stagger: 0.1, scrollTrigger: {
      trigger: '.hero',
      start: "top top",
      end: "160% 100%",
      scrub: 1
  }});
}

const floatingBox = () => {
  const heroWrapper = document.querySelector('.hero');
  const patternBox = document.querySelector('.pattern-box');
  const patternBoxImg = document.querySelector('.pattern-box__img');

  gsap.to(patternBox, .5, {opacity: 1, delay: 3});

  heroWrapper.addEventListener('mousemove', (e) => {
    var relX = e.pageX - heroWrapper.offsetLeft;
    var relY = e.pageY - heroWrapper.offsetTop;

    gsap.to(patternBoxImg, 1, {
      x: (relX - heroWrapper.offsetWidth / 2) / heroWrapper.offsetWidth * -40,
      y: (relY - heroWrapper.offsetHeight / 2) / heroWrapper.offsetHeight * -40
    });
  });
}

export { heroAnimations, floatingBox };