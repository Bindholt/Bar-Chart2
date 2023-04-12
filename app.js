"use strict";

window.addEventListener("load", init);

const numbers = [12, 7, 0, 30, 1, 22, 8, 31, 14, 19, 4, 9, 20, 16, 27, 6, 26, 29, 18, 25, 24, 17, 2, 10, 11, 21, 28, 23, 15, 5, 13, 3, 32, 1, 31, 29, 12, 8, 7, 24, 20, 0];

function init() {
    const bars = document.querySelectorAll(".bar");

    const firstBar = bars[0];

    const h = data[0] / 32 * 100;

    firstBar.style.height = `${h}px`;
}