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

const getMenuExpand = () => document.querySelector(".menu-expand");

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

const handleMenu = (check) => {
  const openIcon = document.getElementById("open-menu");
  const closeIcon = document.getElementById("close-menu");
  const { menu, menuExpand, nav } = getNavElements();

  openIcon.style.display = "none";
  closeIcon.style.display = "none";
  if (check) {
    closeIcon.style.display = "inline";
    menuExpand.style.display = "flex";
    menu.style.height = "42vh";
    nav.style.backdropFilter = "blur(20px)";
    nav.style.borderRadius = "0 0 2em 2em";
  } else {
    openIcon.style.display = "inline";
    menuExpand.style.display = "none";
    menu.style.height = "100%";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.borderRadius = "0 0 0 0";
  }
};

const handleWindowSize = () => {
  const width = window.innerWidth;
  const { menu, menuExpand, nav } = getNavElements();

  if (width >= MINWIDTH) {
    menuExpand.style.display = "flex";
    menu.style.height = "100%";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.borderRadius = "0 0 0 0";
  } else {
    if (menuExpand.style.display !== "none") handleMenu(false);
  }
};

const handleScroll = () => {
  handleMenuOnLeave();
};

const changeMenuButton = (isScrolled) => {
  const color = isScrolled ? codewarColor : "#fff";
  document.querySelectorAll(".menu-button").forEach((button) => {
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
  const header = document.querySelector("header");

  landingObserver = new IntersectionObserver((entries, landingObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        changeMenuButton(true);
      } else {
        header.classList.remove("nav-scrolled");
        changeMenuButton(false);
      }
    });
  }, landingPageOptions);

  landingObserver.observe(landingPage);
};


window.onresize = handleWindowSize;
landingPageObserve();
