"use strict";

// console.log("before timeout");

// setTimeout(() => {
//     console.log("in timeout"); // => web-api
// }, 1000);

// console.log("after timeout");

// // call-stack
// function f1() {
//     console.trace();
//     console.log("end");
// }
// function f() {
//     console.trace();
//     f1();
// }
// f();

//////////////////////////////////////

//// JSON

// const obj = {
//     number: 1,
//     string: "string",
//     array: [1, 2, false],
//     boolean: true,
//     null: null,
//     plainObject: { prop: 10 },
//     getNumber() {
//         // Функции и методы не передаются в JSON.
//         return this.number;
//     },
//     undefined: undefined, // undefined не передаётся в JSON.
// };

// // obj => JSON сереализация
// const objJson = JSON.stringify(obj);
// console.log(objJson);

// // JSON => obj десереализация
// const parseObj = JSON.parse(objJson);
// console.log(parseObj);

///////////////////////////////////////////////////////////

// // Коллбэк - функция, которая передаётся в другую функцию как аргумент и выполняется в ней.

// // Promise

// // setInterval(() => {}, 10000);
// // arr.map((a) => 10);

// let isCelsiiDegree = true;

// const tempUnitBtn = document.getElementById("tempUnitBtn");
// tempUnitBtn.onclick = switchTemperatureUnit;
// function switchTemperatureUnit() {
//     isCelsiiDegree = !isCelsiiDegree;
//     updateData();
// }

// updateData();

// function updateData() {
//     tempUnitBtn.textContent = `Switch to ${isCelsiiDegree ? "F" : "C"}`;

//     const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&hourly=temperature_2m&current_weather=true${isCelsiiDegree ? "" : "&temperature_unit=fahrenheit"}`;

//     fetch(weatherUrl)
//         .then((response) => response.json())
//         .then((data) => generateWeather(data))
//         .catch((err) => console.log("err => ", err));
// }

// function generateWeather({
//     current_weather: { temperature },
//     current_weather_units: { temperature: tempUnit },
// }) {
//     const currentTemperatureEl = document.querySelector(".temp");

//     currentTemperatureEl.textContent = `${temperature} ${tempUnit}`;
//     currentTemperatureEl.style.color = calcTemperatureColor(temperature);
// }

// function calcTemperatureColor(temperature) {
//     if (temperature < 0) {
//         return "blue";
//     } else if (temperature === 0) {
//         return "black";
//     } else if (temperature > 0 && temperature < 40) {
//         return "green";
//     } else {
//         return "red";
//     }
// }

////////////////////////////////////////////////////////

function promiseCb(resolve, reject) {
    // прописываем функцию.

    // resolve("success result!"); //Функция выполнена правильно
    reject(new Error("something went wrong...")); //Ошибка.
}

const promise = new Promise(promiseCb);

promise
    .then((data) => console.log("data => ", data))
    .catch((err) => console.log("err => ", err));

Promise.resolve([{ user: "Test" }]).then((data) =>
    console.log("data => ", data),
);

/////////////////////

function executor(resolve, reject) {
    if (Math.random() < 0.5) {
        resolve("cat is alive!");
    } else {
        reject(new Error("cat is not alive."));
    }
}

const shrederCat = new Promise(executor);

shrederCat
    .then((data) => console.log("data => ", data))
    .catch((err) => console.log(err));

////////////

// setTimeout(() => console.log("action is over!"), 2000);

function delay(ms) {
    const executor = function (res, rej) {
        if (typeof ms !== "number") {
            rej(new TypeError("ms must be number!"));
        }
        if (ms < 0 || !Number.isInteger(ms)) {
            rej(new RangeError("ms must be positiv integer value!"));
        }
        setTimeout(res, ms);
    };

    return new Promise(executor);
}

delay(2000)
    .then(() => console.log("action is over!"))
    .catch((err) => console.log("err => ", err));
