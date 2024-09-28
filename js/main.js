"use strict";

let modalNumber = document.querySelector(".modalNumber");
let Advantage = document.querySelector(".Advantage");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                modalNumber.classList.add("show");
            } else {
                modalNumber.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.75,
    }
);

observer.observe(Advantage);