(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const header = document.querySelector(".header");
    window.addEventListener("scroll", (function() {
        if (window.scrollY > 52) header.classList.add("scrolled"); else header.classList.remove("scrolled");
    }));
    let menuBtn = document.querySelector(".icon-menu");
    let menu = document.querySelector(".menu__body");
    const body = document.body;
    menuBtn.addEventListener("click", (() => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("body-active");
        body.classList.toggle("lock");
    }));
    window["FLS"] = true;
    isWebp();
})();