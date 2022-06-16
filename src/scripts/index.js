import "../styles/index.scss";
import "../styles/navbar.scss";
import "../styles/section2.scss";
import "../styles/section3.scss";
import "../styles/section4.scss";
import "./navbar";
import "./section3";

function run() {
  var password = prompt("Password Please");
  if (password != "anatta") {
    document.body.innerHTML = "";
    document.body.innerHTML = "Password Failed! Reload to Renter Password";
  } else {
    alert("Success");
  }
}
run();
