const cookies = () => {
  const cookiesWrapper = document.querySelector('.cookies');
  const cookiesClose = document.querySelector('.cookies__close');
  let cookiesCookie = getCookie('cookies');

  if(!cookiesCookie){
    setTimeout(() => {
      cookiesWrapper.style.transform = 'translateX(0)';
    }, 3000);
  }

  cookiesClose.addEventListener('click', () => {
    setCookie('cookies', 'true', 30);
    cookiesWrapper.style.transform = 'translateX(120%)';
  });
}

const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default cookies;