import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const heroAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroElements = document.querySelectorAll(['.hero__title', '.hero__subtitle', '.hero .buttons']);
  const titles = document.querySelectorAll('.hero__title div span');
  const subtitle = document.querySelector('.hero__subtitle');
  const buttons = document.querySelectorAll('.hero .buttons .button');

  const tl = gsap.timeline({delay: 1});

  tl.to(titles, .8, {opacity: 1, translateY: 0, stagger: 0.1})
    .from(subtitle, .4, {opacity: 0, translateY: '50px'})
    .from(buttons, .3, {opacity: 0, translateY: '50px', stagger: 0.1});

  gsap.to(
    heroElements, 
    {opacity: 0, translateY: '-40%', stagger: 0.1, scrollTrigger: {
      trigger: '.hero',
      start: "top top",
      end: "160% 100%",
      scrub: 1
  }});
}

export default heroAnimations;