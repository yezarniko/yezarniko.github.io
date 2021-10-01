const MINWIDTH = 961;
const codewarColor = "#b1361e";


function getStyleVar(name) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(name);
}

function mediaControl(desktopTask, mobileTask) {
  const width = window.innerWidth;
  if (width >= MINWIDTH) {
    desktopTask();
  } else {
    mobileTask();
  }
}
