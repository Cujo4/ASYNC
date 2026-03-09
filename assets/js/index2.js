"use strict";

const dogBtn = document.querySelector(".dogBtn");
const dogImg = document.querySelector(".dogImg");

const url = "https://dog.ceo/api/breeds/image/random";

const dog = function (ms) {
    function resolve(res) {
        setTimeout(res, ms);
    }
    return new Promise(resolve);
};

dogBtn.onclick = function () {
    dog(1000)
        .then(() => fetch(url))
        .then((result) => result.json())
        .then((data) => {
            dogImg.src = data.message;
            console.log("data => ", data);
        });
};
