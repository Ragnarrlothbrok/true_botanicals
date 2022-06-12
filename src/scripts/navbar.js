window.onscroll = function() {
    scrollFunction();
    stickyFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.height = "58px";
    document.getElementById("navbar-right").style.lineHeight = "58px";
    document.getElementById("navbar-left").style.lineHeight = "58px";
  } else {
    navbar.style.height = "99px";
    document.getElementById("navbar-right").style.lineHeight = "99px";
    document.getElementById("navbar-left").style.lineHeight = "99px";
  }
}