import "../styles/index.scss";
import "../styles/navbar.scss";
import "../styles/section2.scss";
import "./navbar";

// console.log('webpack starterkit');

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
