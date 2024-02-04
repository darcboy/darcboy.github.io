const submitBtn = document.querySelector("#btn"),
  exit = document.querySelector("#exit"),
  login = document.querySelector("#login");

exit.addEventListener("click", () => login.classList.remove("active"));
submitBtn.addEventListener("click", () => login.classList.add("active"));

document.addEventListener("click", (e) => {
  const item = e.target.classList;
  if (
    !item.contains("login") &&
    !item.contains("btn") &&
    !item.contains("dont-ident")
  ) {
    login.classList.remove("active");
  }
});
