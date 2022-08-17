import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const contactAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const burgerLines = document.querySelectorAll('.burger__line');

  // from hero to offer
  gsap.fromTo(
    burgerLines,
    {backgroundColor: '#001C20'},
    {backgroundColor: '#ffffff', scrollTrigger: {
      trigger: '.hero',
      start: "70% top",
      end: '100% 100%',
      scrub: 1,
  }});


  // from offer to portfolio
  gsap.fromTo(
    burgerLines,
    {backgroundColor: '#ffffff'},
    {backgroundColor: '#001C20', scrollTrigger: {
      trigger: '.offer',
      start: "bottom top",
      end: '100% 100%',
      scrub: 1,
  }});


  // to contact
  gsap.fromTo(
    burgerLines,
    {backgroundColor: '#001C20'},
    {backgroundColor: '#ffffff', scrollTrigger: {
      trigger: '.about',
      start: "bottom top",
      end: '100% 100%',
      scrub: 1,
  }});
}

export default contactAnimations;