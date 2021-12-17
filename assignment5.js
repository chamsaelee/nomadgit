let width;

function resizeWidth() {
  width = window.innerWidth;
  const small = "ResizeSmall";
  const middle = "ResizeMiddle";
  const large = "ResizeLarge";
  if (width < 500) {
    document.body.classList.remove(middle);
    document.body.classList.add(small);
  } else if (width >= 500 && width < 900) {
    if (document.body.classList.value === large) {
      document.body.classList.remove(large);
    } else if (document.body.classList.value === small) {
      document.body.classList.remove(small);
    }
    document.body.classList.add(middle);
  } else if (width >= 900) {
    document.body.classList.remove(middle);
    document.body.classList.add(large);
  }
}

window.addEventListener("resize", resizeWidth);
