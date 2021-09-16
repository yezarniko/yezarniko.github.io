const MINWIDTH = 961;
const codewarColor = getStyleVar("--codewar");

function getStyleVar(name) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(name);
}

const handleOnClick = () => {
  const buttonState = getMenuExpand().style.display === "none" ? true : false;
  handleMenu(buttonState);
};

const getMenuExpand = () => document.querySelector(".menu__expand");

const handleMenuOnLeave = () => {
  const menuExpand = getMenuExpand();
  if (window.innerWidth < MINWIDTH && menuExpand.style.display != "none")
    handleMenu(false);
};

const getNavElements = () => {
  const menu = document.querySelector(".menu");
  const menuExpand = getMenuExpand();
  const nav = document.querySelector("nav");

  return { menu, menuExpand, nav };
};

const handleMenuOpen = (display) => {
  const { menu, menuExpand, nav } = getNavElements();
  menuExpand.style.display = display;
  menuExpand.style.marginBottom = "0";
  menu.style.height = "100%";
  nav.style.backdropFilter = "blur(10px)";
  nav.style.borderRadius = "0 0 0 0";
};

const handleMenu = (check) => {
  const openIcon = document.getElementById("open-menu");
  const closeIcon = document.getElementById("close-menu");
  const { menu, menuExpand, nav } = getNavElements();

  openIcon.style.display = "none";
  closeIcon.style.display = "none";
  if (check) {
    closeIcon.style.display = "inline";
    menuExpand.style.display = "flex";
    menuExpand.style.marginBottom = "1.5em";
    menu.style.Maxheight = "42vh";
    nav.style.backdropFilter = "blur(20px)";
    nav.style.borderRadius = "0 0 2em 2em";
  } else {
    openIcon.style.display = "inline";
    handleMenuOpen("none");
  }
};

const handleWindowSize = () => {
  const width = window.innerWidth;
  const { menuExpand } = getNavElements();

  if (width >= MINWIDTH) {
    handleMenuOpen("flex");
  } else {
    if (menuExpand.style.display !== "none") handleMenu(false);
  }
};

const handleScroll = () => {
  handleMenuOnLeave();
};

const changeMenuButton = (isScrolled) => {
  const color = isScrolled ? codewarColor : "#fff";
  document.querySelectorAll(".menu__button").forEach((button) => {
    button.querySelectorAll("[stroke]").forEach((vector) => {
      vector.setAttribute("stroke", color);
    });
  });
};

const landingPageObserve = () => {
  const landingPage = document.querySelector(".landing");
  const landingPageOptions = {
    rootMargin: "-70px 0px 0px 0px",
  };
  const nav = document.querySelector("nav");

  landingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("nav--scrolled");
        changeMenuButton(true);
      } else {
        nav.classList.remove("nav--scrolled");
        changeMenuButton(false);
      }
    });
  }, landingPageOptions);

  landingObserver.observe(landingPage);
};

const toggleFullscreen = () => {
  if (window.innerHeight !== screen.height) {
    body = document.querySelector("body");
    body.requestFullscreen();
    body.webkitRequestFullscreen();
  } else {
    document.exitFullscreen();
    document.webkitExitFullscreen();
  }
};

const hideIntroMessage = () => {
  document.querySelector(".introMessage").style.display = "none";
  localStorage.setItem("notFirstTime", "true");
};

const showMessageDialog = () => {
  if (
    localStorage.getItem("notFirstTime") === "true" ||
    window.innerWidth >= MINWIDTH
  ) {
    document.querySelector(".introMessage").style.display = "none";
  }
};

showMessageDialog();
window.onresize = handleWindowSize;
landingPageObserve();
