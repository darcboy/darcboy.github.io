const light = document.querySelector("#light"),
  login = document.querySelector("#web-body"),
  dark = document.querySelector("#dark");

dark.addEventListener("click", () => login.classList.add("active"));
light.addEventListener("click", () => login.classList.remove("active"));
