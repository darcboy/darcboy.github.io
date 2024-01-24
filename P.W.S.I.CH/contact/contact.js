const submitBtn = document.querySelector("#btn"),
  exit = document.querySelector("#exit"),
  login = document.querySelector("#login");

exit.addEventListener("click", () => (login.style.display = "none"));
submitBtn.addEventListener("click", () => (login.style.display = "block"));
submitBtn.addEventListener("click", () => login.classList.remove("show"));
