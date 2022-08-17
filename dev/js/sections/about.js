import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const aboutAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutElements = document.querySelectorAll(['.about .heading', '.about__text', '.about .button']);
  const boxLeft = document.querySelector('.about__photo__left');
  const boxRight = document.querySelector('.about__photo__right');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "20% bottom",
      end: "160% 100%",
      scrub: 1
    }
  });

  tl
  .from(aboutElements, {opacity: 0, y: 300})
  .to(aboutElements, {opacity: 1, y: 0})
  .to(aboutElements, {opacity: 0, y: -300});


  // photos animations
  const photosTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: "-20% top",
    }
  });

  photosTl
  .to(boxLeft, {x: -500})
  .to(boxRight, {x: 500}, '<')
  .to(boxLeft, {duration: .1, zIndex:-1})
  .to(boxRight, {duration: .1, zIndex:-1}, '<')
  .to(boxLeft, {x: -25})
  .to(boxRight, {x: 25}, '<');
}

export default aboutAnimations;