const scrollDown = () => {
  const scrollDownButton = document.querySelector('[data-scroll-down]');

  if (scrollDownButton) {
    scrollDownButton.addEventListener('click', () => {
      if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight) {
        window.scrollTo(0, 0);
        scrollDownButton.classList.remove('scroll-down--up');
      } else {
        window.scrollTo(0, window.scrollY + window.innerHeight);

        setTimeout(() => {
          if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight) {
            scrollDownButton.classList.add('scroll-down--up');
          }
        }, 150);
      }
    });
  
    window.addEventListener('wheel', _.debounce(() => {
      if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight) {
        scrollDownButton.classList.add('scroll-down--up');
      } else {
        scrollDownButton.classList.remove('scroll-down--up');
      }
    }, 50));
  }
}

export default scrollDown;