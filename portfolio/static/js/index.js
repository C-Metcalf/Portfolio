  let aDiv = document.getElementById("animatedDiv");
  let oneShot = true;

  function changeWidth() {
    let scrollVal = window.pageYOffset;
    let newSize = 100 - (scrollVal * 100 / 1900);

    // Ensure the size does not go below 10%
    newSize = newSize <= 10 ? 10 : newSize;

    // Update width and height
    aDiv.style.width = newSize + "%";
    aDiv.style.height = newSize + "%";

    let currentWidth = parseFloat(aDiv.style.width);

    // If below threshold, make it scroll off the page
    if (currentWidth <= 15) {
        aDiv.style.position = "sticky";
        //aDiv.style.top = `${scrollVal}px`; // Adjusts the top position dynamically

    } else {
        aDiv.style.position = "fixed";
        aDiv.style.top = "0"; // Resets top position when fixed
        oneShot = true;
    }
  }

  window.addEventListener(
    "scroll",
    function () {
      requestAnimationFrame(changeWidth);
    },
    false
  );