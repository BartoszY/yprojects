import { gsap } from "gsap";
import ScrollTrigger from "../../../gsap-public/src/ScrollTrigger";

const portfolioAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // const portfolioItems = document.querySelectorAll('.portfolio__item');

  // gsap.fromTo(
  //   portfolioItems, 0.8,
  //   {scaleY: 0, opacity: 0},
  //   {scaleY: 1, opacity: 1, stagger: 0.15, scrollTrigger: {
  //     trigger: '.portfolio',
  //     start: "-20% top",
  // }});


  // const moreButton = document.querySelector('.portfolio__more');
  // const moreList = document.querySelector('.portfolio__list');

  // if (moreButton && moreList) {
  //   moreButton.addEventListener('click', () => {
  //     moreList.classList.toggle('active');
  //   });
  // }
  const portfolioItems = document.querySelectorAll('.project-box');

  gsap.fromTo(
    portfolioItems, 0.8,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, stagger: 0.5, scrollTrigger: {
      trigger: '.portfolio',
      start: "-20% top",
  }});
}

export default portfolioAnimations;