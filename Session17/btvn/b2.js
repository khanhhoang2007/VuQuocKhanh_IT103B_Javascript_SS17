let count = localStorage.getItem("visitCount") || 0;
let loadWeb = document.getElementById("displayLoad");
window.addEventListener("load", () => {
  count++;
  localStorage.setItem("visitCount", count);
  loadWeb.innerHTML = count;
});
