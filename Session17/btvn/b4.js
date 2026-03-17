let show = document.getElementById("showUser");
let data = localStorage.getItem("myProfile");
if (data) {
  let profile = JSON.parse(data);
  show.innerText = "Tên: " + profile.name + " | Tuổi: " + profile.age;
}
function saveProfile() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let profile = {
    name: name,
    age: age,
  };
  localStorage.setItem("myProfile", JSON.stringify(profile));
  show.innerText = "Tên: " + name + " | Tuổi: " + age;
}
