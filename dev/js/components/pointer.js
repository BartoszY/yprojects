import { gsap } from "gsap";

const pointer = () => {
  const pointer = document.querySelector('[data-pointer]');

  document.addEventListener('mousemove', (e) => {
    // TODO
    /* Możę taki efekt że zapisujemy osattnią pozycje kursora i potem na zderzenie z buttonem jakby wlewamy w button kolor z tego miejsca co był kursor, tak jak potem wychodzimy to tak samo, jakby się ten kursor zlewał z buttonem

    A na innym elemencie inaczej np jak w burgera wchodzi itp
    */
    gsap.to(pointer, 0.1, {x: e.pageX - 10, y: e.pageY - 10});

    if (e.target.nodeName == 'A' || e.target.nodeName == 'BUTTON' || (e.target.parentElement && e.target.parentElement.className == 'burger')) {
      gsap.to(pointer, 0.4, {
        borderRadius: '15px',
        borderColor: '#ffffff',
        opacity: 0.8
      });
    } else {
      gsap.to(pointer, 0.4, {
        borderRadius: 0,
        borderColor: 'transparent',
        opacity: 1
      });
    }
  });
}

export default pointer;