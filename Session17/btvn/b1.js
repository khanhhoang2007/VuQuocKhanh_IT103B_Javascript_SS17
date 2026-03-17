let clickElement = () => {
  let showInput = document.getElementById("inputValue");
  let valueInput = showInput.value;
  localStorage.setItem("name", valueInput);
  let byName = localStorage.getItem("name");
  // console.log(byName);

  let showElement = document.getElementById("displayValue");
  showElement.innerHTML = valueInput;
};
