let Humb = document.querySelector("#humb");
let body = document.querySelector("body");
let nav = document.querySelector(".navContents");
let tryN = document.querySelector("#TryNew");
let togBar = document.querySelector(".togContents");
let a = [];
let c = 0;
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

