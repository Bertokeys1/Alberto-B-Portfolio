const MenuBtn = document.querySelector("#menuBtn");
const dropdownMenu = $("#dropdown-menu");

const renderDropdown = (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (dropdownMenu.hasClass("hidden")) {
    dropdownMenu.removeClass("hidden");
  } else {
    dropdownMenu.addClass("hidden");
  }
};

MenuBtn.addEventListener("click", renderDropdown);
