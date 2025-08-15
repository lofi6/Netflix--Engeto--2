// Navbar Sign Up page
fetch("../nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Password check
function valid() {
  const password1 = document.getElementById("pass1");
  const password2 = document.getElementById("pass2");

  const pass1 = password1.value;
  const pass2 = password2.value;

  if (pass1 !== pass2) {
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    return false;
  } else {
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
    return true;
  }
}

document.getElementById("pass1").addEventListener("input", valid);
document.getElementById("pass2").addEventListener("input", valid);
