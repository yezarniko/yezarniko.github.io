const projects__boxes = [
  ...document.querySelector(".projects__warp").children,
].filter((c) => [...c.classList].includes("projects__box"));
var currentProjectsBox = 0;
const lastBox = projects__boxes.length - 1;


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

const controlProjectBox = (pbox, state, modifier) => {
  if(modifier === "hidden" || modifier === "last")
    switch (state) {
      case "add":
        pbox.classList.add(`projects__box-${modifier}`);
        break;
      case "rm":
        pbox.classList.remove(`projects__box-${modifier}`);
        break;
  }
};

const handleMoreButtonDisplay = () => {
  if (projects__boxes.indexOf(projects__boxes[currentProjectsBox]) === lastBox)
    document.querySelector(".projects__more_btn").style.display = "none";
};

const handleMoreButton = () => {
  Index = projects__boxes.indexOf(
    document.querySelector(".projects__box-last")
  );
  if (Index !== lastBox) {
    controlProjectBox(projects__boxes[Index + 1], "rm", "hidden");
    controlProjectBox(projects__boxes[Index + 1], "add", "last");
    controlProjectBox(projects__boxes[Index], "rm", "last");
    currentProjectsBox += 1;
  }
  handleMoreButtonDisplay();
  document.querySelector(".container").style.scrollSnapType = "none";
  setInterval(()=>
  document.querySelector(".container").style.scrollSnapType = "y mandatory",
  3000
  );
};

const initialProjectShowcase = () => {
  mediaControl(
    () => {
      controlProjectBox(projects__boxes[1], "rm", "hidden");
      currentProjectsBox += 1;
    },
    () => controlProjectBox(projects__boxes[1], "add", "hidden")
  );
  controlProjectBox(projects__boxes[currentProjectsBox], "add", "last")
  handleMoreButtonDisplay();
};

changeMenuButton(false);
showMessageDialog();
landingPageObserve();
initialProjectShowcase();
document
  .querySelector(".projects__more_btn h4")
  .addEventListener("click", handleMoreButton);
