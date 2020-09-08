import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const portfolioAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    '.portfolio-grid article p', 0.8,
    {x: '-100px', opacity: 0},
    {x: 0, opacity: 1, stagger: 0.1, scrollTrigger: {
      trigger: '.portfolio',
      start: "-20% top",
  }});

  gsap.fromTo(
    '.portfolio-grid__item', 0.8,
    {x: '200px', opacity: 0},
    {x: 0, opacity: 1, stagger: 0.1, delay: 0.8, scrollTrigger: {
      trigger: '.portfolio',
      start: "-20% top",
  }});
}

export default portfolioAnimations;