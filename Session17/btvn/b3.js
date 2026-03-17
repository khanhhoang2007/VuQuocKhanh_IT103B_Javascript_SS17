let box = document.getElementById("backgroundBox");
let theme = localStorage.getItem("background");
if (theme === "dark") {
  box.classList.add("dark");
}

function changeTheme() {
  box.classList.toggle("dark");
  if (box.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
