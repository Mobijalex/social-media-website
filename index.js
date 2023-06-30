// SIDEBAR

const menuItem = document.querySelectorAll(".menu-item");

// MESSAGES

const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// REMOVE ACTIVE CLASS FROM ALL MENU ITEM

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};
//  NOTIFICATION POPUP NOT WORKING

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
        "#notification .notification-count"
      ).style.display = "none";
    }
  });
});

//  NOTIFICATION POPUP NOT WORKING

// MESSAGES SECTION STARTS

// SEARCH CHAT OPTION
const searchMessage = () => {
  const val = messageSearch.value.toLoweCase();
  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowerCase;
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup , searchMessage");

// MESSAGES SECTION ENDS NOT WORKING

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var (--color-primary)";
  // MESSAGES  BOX SHADOW NOT WORKING
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
