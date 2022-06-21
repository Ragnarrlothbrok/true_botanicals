window.onscroll = function () {
  scrollFunction();
};

let navbar = document.getElementById("navbar");
const hamburgerMenu = document.getElementById("menuIcon");
const overlay = document.querySelector(".overlay");
const navbarRight = document.getElementById("navbar-right");
const dropdown = document.querySelectorAll(".dropdown");

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    navbar.style.height = "58px";
    document.getElementById("navbar-right").style.lineHeight = "58px";
    document.getElementById("navbar-right").style.top = "58px";
    document.getElementById("navbar-left").style.lineHeight = "58px";
  } else {
    navbar.style.height = "99px";
    document.getElementById("navbar-right").style.lineHeight = "99px";
    document.getElementById("navbar-right").style.top = "135px";
    document.getElementById("navbar-left").style.lineHeight = "99px";
  }
}

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("mouseenter", function () {
    overlay.classList.add("active");
    
  });
  dropdown[i].addEventListener("mouseleave", function () {
    overlay.classList.remove("active");
  });
}

hamburgerMenu.addEventListener("click", () => {
  if (navbarRight.classList.contains("active")) {
    navbarRight.classList.add("inactive");
    setTimeout(() => {
      navbarRight.classList.remove("active");
      overlay.classList.remove("active");
      navbarRight.classList.remove("inactive");
    }, 300);
  } else {
    navbarRight.classList.add("active");
    overlay.classList.add("active");
  }
});

overlay.addEventListener("click", () => {
  if (navbarRight.classList.contains("active")) {
    navbarRight.classList.add("inactive");
    setTimeout(() => {
      navbarRight.classList.remove("active");
      overlay.classList.remove("active");
      navbarRight.classList.remove("inactive");
    }, 300);
  } else {
    navbarRight.classList.add("active");
    overlay.classList.add("active");
  }
});
