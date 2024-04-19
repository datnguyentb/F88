import { service_list } from "../data/database.js"

const icon_check = '<i class="fa-duotone fa-circle-check"></i>';
let lis_elements = document.querySelectorAll(".hot-service .top-box li");
let h1_element = document.querySelector(".hot-service .bottom-box h1");
let ul_element = document.querySelector(".hot-service .bottom-box ul");
let img_element = document.querySelector(".hot-service .bottom-box img");

let reloadDom = () =>  {
    let html_element = "";
    lis_elements.forEach((current, index ) => {
        if(index == isActive) {
            lis_elements[index].classList.add("isActive")
        } else {
            lis_elements[index].classList.remove("isActive")
        }
    })
    service_list[isActive].content.forEach((current, index) => {
        html_element += `<li>${icon_check}<div class="text"><span>${current}</span></div></li>`
    })

    h1_element.textContent = `${service_list[isActive].title}`
    ul_element.innerHTML = html_element
    img_element.src = service_list[isActive].img
}


var isActive = 0;
reloadDom()
document.addEventListener("DOMContentLoaded", function() {
    lis_elements.forEach(function(li, index) {
      li.onclick = function() {
        isActive = index;
        reloadDom();
      };
    });
});