// SIDEBAR

const menuItem = document.querySelectorAll(".menu-item");

// REMOVE ACTIVE CLASS FROM ALL MENU ITEM

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup");
      Style.display = "none";
    } else {
      document.querySelector(".notification-popup");
      style.display = "block";
      document.querySelector(
        "#notification . notification-count"
      ).style.display = "none";
    }
  });
});

// NOT WORKING
