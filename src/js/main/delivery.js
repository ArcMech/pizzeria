const triggers = document.querySelectorAll(".delivery");
const list = document.querySelectorAll(".list-init");
const listShow = document.querySelectorAll(".list > li");
const background = document.querySelector(".dropdownBackground");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    100
  );
  background.classList.add("open");
  background.style.display = "inline-flex";
  listShow.forEach(list => list.classList.add("open"));
}

function handleLeave() {
  // console.log('LEAVE!');
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
  background.style.display = "none";
}

list.forEach(trigger => trigger.addEventListener("click", handleEnter));

triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", handleLeave)
);
