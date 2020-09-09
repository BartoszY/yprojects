import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const contactAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    '.contact-box__before',
    {x: '240px'},
    {x: 0, borderTopWidth: 80, borderRightWidth: 80, scrollTrigger: {
      trigger: '.portfolio',
      start: "50% top",
      end: "170% 100%",
      scrub: 1
  }});

  gsap.fromTo(
    '.contact-box__after',
    {x: '-240px'},
    {x: 0, borderBottomWidth: 80, borderLeftWidth: 80, scrollTrigger: {
      trigger: '.portfolio',
      start: "50% top",
      end: "170% 100%",
      scrub: 1
  }});
}

export default contactAnimations;