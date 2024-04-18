let list = document.querySelector("#slider .list");
let items = document.querySelectorAll('#slider .list .item')
let dots = document.querySelectorAll('#slider .dots li');
let prev = document.getElementById('prev')
let next = document.getElementById('next');
let showMenuIcon = document.querySelector(".tab-menu .show-menu-icon");
let closeIcon = document.querySelector(".tab-menu .close-icon");
let showMenuTab = document.querySelector(".tab-menu .show-menu-tab");


let active = 0;
let lengthItems = items.length - 1;

showMenuIcon.addEventListener('click', () => {
    showMenuTab.style.display = "flex";
    closeIcon.style.display = "block";
    showMenuIcon.style.display = "none";
})

closeIcon.addEventListener('click', () => {
    showMenuTab.style.display = "none";
    closeIcon.style.display = "none";
    showMenuIcon.style.display = "block";
})

next.onclick = function() {
    if(active+1 > lengthItems) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}

prev.onclick = function() {
    if(active -1 < 0) {
        active = lengthItems;
    } else {
        active -= 1;
    }
    reloadSlider();
}


let refreshSlider = setInterval(()=> {
    next.click();
}, 5000)

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('#slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
})
