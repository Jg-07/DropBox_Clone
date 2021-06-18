let Humb = document.querySelector("#humb");
let body = document.querySelector("body");
let nav = document.querySelector(".navContents");
let tryN = document.querySelector("#TryNew");
let togBar = document.querySelector(".togContents");
let arrow = document.querySelector(".con3");
let mainBox = document.querySelector(".main");
let boxs = document.querySelectorAll(".box");
let a = [];
let c = 0;
let BillMonth = document.querySelector("#BillMonthly")
let BillYear = document.querySelector("#BillYearly")
let adv = document.querySelector(".pbox1 .cont3")
let std = document.querySelector(".pbox2 .cont3")

Humb.addEventListener('click', function () {
    a = Humb.classList;
    c = 0;
    for (const x of a)
        if (x == 'is-active')
            c++;
    if (c >= 1) {
        body.classList.remove('stopOverflow');
        Humb.classList.remove('is-active');
        togBar.classList.add('hidden');
        tryN.classList.remove('colChange1');
        nav.classList.remove('colChange2');
    }
    else {
        body.classList.add('stopOverflow');
        Humb.classList.add('is-active');
        tryN.classList.add('colChange1');
        nav.classList.add('colChange2');
        togBar.classList.remove('hidden');
        togBar.classList.add('fadeopen');
    }
});
window.onscroll = function () {
    if (window.scrollY == 0) {
        tryN.classList.remove('colChange1');
        nav.classList.remove('colChange2');
    }
    else {
        tryN.classList.add('colChange1');
        nav.classList.add('colChange2');
    }
}
arrow.addEventListener('click', function () {
    window.scrollTo({
        top: 700,
        behavior: "smooth",
    })
});

BillYear.addEventListener('click', function () {
    std.innerText = '$12.5';
    adv.innerText = '$20'
})

BillMonth.addEventListener('click', function () {
    std.innerText = '$15';
    adv.innerText = '$25';
})