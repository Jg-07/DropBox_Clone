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

////////////////////////////////// Barmuda Carousel //////////////////////////////////////////////

let Bblock = document.querySelector('.boxBlock')
let box = document.querySelectorAll('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let main = document.querySelector('.main');



box1.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand1.svg" style="filter:grayscale();width: 150px;"></div>
    <div class="boxCon2">
        <hr>
    </div>
    <div class="boxCon3">
        “Our team is constantly working across different countries, time zones and offices. A lot of
        solutions can accommodate that now, but none make it as seamless as Dropbox and Dropbox Paper.”
    </div>
    <div class="boxCon4">Morten Thomsen, Global IT Lead</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box1.classList.add('border');
})

box2.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand2.svg" style="filter:grayscale();width: 150px;"></div>
    <div class="boxCon2">
        <hr>
    </div>
    <div class="boxCon3">
        “Our users were accomplishing a lot of great work on Dropbox without any support. Deploying a
        central account allowed that great work to continue, uninterrupted, in the most secure way
        possible.”
    </div>
    <div class="boxCon4">Elias Eldayrie, Vice President & CIO</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box2.classList.add('border');
})

box3.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand3.svg" style="filter:grayscale();width: 100px;"></div>
    <div class="boxCon2">
        <hr>
    </div>
    <div class="boxCon3">
        “With Dropbox, educators can collaborate securely with colleagues on any device and platform —
        across campus and across the world.”
    </div>
    <div class="boxCon4">Tina Thorstenson, CISO</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box3.classList.add('border');
})

box4.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand4.svg"
    style="filter:grayscale();width: 150px; margin-top: -30px;"></div>
<div class="boxCon2">
<hr>
</div>
<div class="boxCon3">
“We’ve always been a pioneer in the card industry, and we think of ourselves in the same way in the
digital space. Thankfully, we pretty much have three words internally that keep us creating great
work: ‘It’s on Dropbox.’”
</div>
<div class="boxCon4">Chris R. Vaccaro, Director, Live Operations & Editor-in-Chief, Mobile</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box4.classList.add('border');
})

box5.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand5.svg"
    style="filter:grayscale();width: 150px; margin-top: -10px;"></div>
<div class="boxCon2">
<hr>
</div>
<div class="boxCon3">
“We’re receiving tons of pictures and are constantly overriding things that couldn’t be managed in
email. Dropbox saves us a huge amount of miscommunication by allowing the latest versions of
documents to be available to everybody at all times.”
</div>
<div class="boxCon4">Andrew Hall, Product Manager</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box5.classList.add('border');
})

box6.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand6.svg"
    style="filter:grayscale();width: 150px; margin-top: -20px;"></div>
<div class="boxCon2">
<hr>
</div>
<div class="boxCon3">
“We’ve always had a global presence, but before Dropbox, we couldn’t be as spread out as we are now.
Dropbox makes our employees feel like they’re all in the same office.”
</div>
<div class="boxCon4">Daniel Jiménez, Head of Mobile Product & Design</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box6.classList.add('border');
})

box7.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand7.svg" style="filter:grayscale();width: 150px;"></div>
    <div class="boxCon2">
        <hr>
    </div>
    <div class="boxCon3">
        “Hearst has more than 360 businesses. Dropbox makes a significant impact by providing a central hub
        for our teams to access all of the content they need from anywhere, on any device. It has completely
        changed the way these teams work.”
    </div>
    <div class="boxCon4">Nicole D’Antuono, VP of Employee Applications</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box7.classList.add('border');
})

box8.addEventListener('click', function () {
    main.innerHTML = `<div class="boxCon1"><img src="Images/brand8.svg"
    style="filter:grayscale();width: 110px;margin-top: -20px;"></div>
<div class="boxCon2">
<hr>
</div>
<div class="boxCon3" style="margin-top: -10px;">
“We strive to create a world-class work environment with the top technologies available. We’ve
achieved a return on investment of over 500% with Dropbox, while taking a giant step to modernize
our IT strategy and enhance collaboration across our company.”
</div>
<div class="boxCon4" style="margin-top:20px;">Nichole Boatsman, IT Director</div>`;
    box.forEach(element => {
        element.classList.remove('border');
    });
    box8.classList.add('border');
})