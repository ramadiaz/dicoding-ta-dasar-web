const darkModeToggle = document.getElementById("darkModeToggle");
const themeImage = darkModeToggle.querySelector("img");
const currentMode = localStorage.getItem("mode") || "light-mode";

document.body.classList.add(currentMode);
themeImage.src =
  currentMode === "dark-mode"
    ? "./public/icon/sun.svg"
    : "./public/icon/moon.svg";

darkModeToggle.addEventListener("click", () => {
  const mode = document.body.classList.contains("light-mode")
    ? "dark-mode"
    : "light-mode";

  document.body.className = mode;
  localStorage.setItem("mode", mode);

  themeImage.src =
    mode === "dark-mode" ? "./public/icon/sun.svg" : "./public/icon/moon.svg";
});
