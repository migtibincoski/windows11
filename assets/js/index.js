const startButton = document.querySelector(".windowslogo");
const notebookContainer = document.querySelector(".initialpage");
const widgets = document.querySelector(".widgets");
const date = document.querySelector(".info .clock #date");
const time = document.querySelector(".info .clock #time");

(() => {
  const batteryPromise = {
    isCharging: false,
    level: 1
  }

  navigator.getBattery().then((battery) => {
    batteryPromise.isCharging = battery.charging
    console.log(battery)
  });

  window.localStorage.setItem(
    "data",
    JSON.stringify({
      volume: 1,
      taskbarOpacity: 0.6,
      battery: batteryPromise
    })
  );
})();
function getData() {
  return JSON.parse(window.localStorage.getItem("data"))
}

notebookContainer.style.height = `${window.innerHeight}px`;
notebookContainer.style.width = `${window.innerWidth}px`;

startButton.addEventListener("click", () => {
  startButton.classList.toggle("active");
});

widgets.addEventListener("click", () => {
  widgets.classList.toggle("active");
});

setInterval(() => {
  date.innerText = `${
    new Date().getDay() < 10 ? `0${new Date().getDay()}` : new Date().getDay()
  }/${
    new Date().getMonth() < 10
      ? `0${new Date().getMonth()}`
      : new Date().getMonth()
  }/${new Date().getFullYear()}`;
  time.innerText = `${
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : new Date().getHours()
  }:${
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes()
  }`;
}, 1000);
