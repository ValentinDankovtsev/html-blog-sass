const burger = document.getElementById("sidebarToggle");
const page = document.querySelector(".page");
const { body } = document;

function closeSidebar() {
  body.classList.remove("show-sidebar");
  document.querySelector(".page__mask").remove();
}
function showSidebar() {
  const mask = document.createElement("div");
  mask.classList.add("page__mask");
  mask.addEventListener("click", closeSidebar);
  page.appendChild(mask);
  body.classList.add("show-sidebar");
}
burger.addEventListener("click", (event) => {
  event.preventDefault();
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});
