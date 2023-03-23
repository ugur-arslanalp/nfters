const categories = document.querySelectorAll(".category-button");
const items = document.querySelectorAll(".listItem");
let categoryAll = document.querySelector("#all");
categoryAll.classList.add("active");

categories.forEach((element) => {
  element.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    showItemByCategory(element.id);
  });
});

function showItemByCategory(itemCategory) {
  items.forEach((item) => {
    if (itemCategory === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(itemCategory) === false) {
      item.style.display = "none";
    } else {
      if (item.style.display === "none") {
        item.style.display = "block";
      }
    }
  });
}

const hamburgerMenu = document.querySelector(".hamburger");
const navBarMenu = document.querySelector(".navbar-menu-links");
hamburgerMenu.addEventListener("click", showHamburgerMenu);

function showHamburgerMenu() {
  hamburgerMenu.classList.toggle("show");
  navBarMenu.classList.toggle("show");

  const bars = hamburgerMenu.querySelectorAll(".bar");
  console.log(navBarMenu.classList);
  if (hamburgerMenu.classList.contains("show")) {
    bars[0].style.transform = "translateY(8px) rotate(45deg)";
    bars[1].style.opacity = 0;
    bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
  } else {
    bars[0].style.transform = "";
    bars[1].style.opacity = "";
    bars[2].style.transform = "";
  }
}
