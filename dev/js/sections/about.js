import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const aboutAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutElements = document.querySelectorAll(['.about .heading', '.about__text', '.about .button']);

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
  .to(aboutElements, {opacity: 1, y: 0});
}

export default aboutAnimations;