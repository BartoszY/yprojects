import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const heroAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroElements = document.querySelectorAll(['.hero__title', '.hero__subtitle', '.hero .buttons']);
  const titles = document.querySelectorAll('.hero__title__row span');
  const subtitle = document.querySelector('.hero__subtitle');
  const buttons = document.querySelectorAll('.hero .buttons .button');

  gsap.to(
    heroElements, 
    {opacity: 0, translateY: '-40%', stagger: 0.1, scrollTrigger: {
      trigger: '.hero',
      start: "top top",
      end: "160% 100%",
      scrub: 1,
  }});

  // bg trees
  const trees = document.querySelector('.hero__trees-front');
  gsap.to(
    trees, 
    {translateY: 25, scrollTrigger: {
      trigger: '.hero',
      start: "top top",
      end: "160% 100%",
      scrub: 1,
  }});

  const tl = gsap.timeline({delay: 0.5});
  tl.to(titles, .8, {opacity: 1, translateY: 0, stagger: 0.1})
    .from(subtitle, .4, {opacity: 0, translateY: '50px'})
    .to(buttons, .3, {opacity: 1, translateY: 0, stagger: 0.1});
}

export { heroAnimations };