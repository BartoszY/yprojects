import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const aboutAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutElements = document.querySelectorAll(['.about .heading', '.about article', '.about .button']);
  const featureBoxes = document.querySelectorAll('.feature-box');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "20% bottom",
      end: "160% 100%",
      scrub: 1
    }
  });

  gsap.fromTo(
    featureBoxes, 0.4,
    {opacity: 0},
    {opacity: 1, stagger: 0.5, scrollTrigger: {
      trigger: '.about',
      start: "-20% top"
  }});

  tl
  .from(aboutElements, {opacity: 0, y: 300})
  .to(aboutElements, {opacity: 1, y: 0})
  .to(aboutElements, {opacity: 0, y: -300});
}

export default aboutAnimations;