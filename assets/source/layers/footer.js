let ul_elements = document.querySelectorAll("#footer .top-box ul")
let h1_elements = document.querySelectorAll("#footer .top-box .show-more")
let down_icons = document.querySelectorAll("#footer .top-box .box .show-more .down-icon")
let up_icons = document.querySelectorAll("#footer .top-box .box .show-more .up-icon")


let ul_length = ul_elements.length;

if (window.innerWidth <= 1024) {
    down_icons.forEach((icon, index) => {
        icon.classList.add('show-icon');
    })
    document.addEventListener("DOMContentLoaded", function() {
        h1_elements.forEach(function(h1, index) {
           h1.onclick = function() {
                if(index < ul_length) {
                    ul_elements[index].classList.toggle("show");
                    down_icons[index].classList.toggle('show-icon');
                    up_icons[index].classList.toggle('show-icon');
                }
           };
       });   
   });
}
