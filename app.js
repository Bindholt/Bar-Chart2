"use strict";

window.addEventListener("load", init);

function init() {
    const bars = document.querySelectorAll(".bar");

    const firstBar = bars[0];

    const h = 50;

    firstBar.style.height = `${h}px`;
}