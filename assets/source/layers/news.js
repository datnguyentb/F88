import { news } from "../data/database.js"

let content_3_left_box_content_element = document.querySelector(".content-3 .left-box a");
let content_3_right_ontent_element = document.querySelector(".content-3 .right-box a")

let html = "";
news.forEach((current, index) => {
    
    if(current.importain == true) {
        content_3_left_box_content_element.innerHTML = 
        `<div class="img">
            <img src="${current.img}" alt="">
        </div>
        <div class="news-content">
            <h3>${current.title}</h3>
            <span>${current.date}</span>
            <p>${current.content_sum}</p>
        </div>`
    } else {
        html += 
        `<div class="box">
            <div class="news-content">
                <h3>${current.title}</h3>
                <span>${current.date}</span>
                <p>${current.content_sum}</p>
            </div>
            <div class="img">
                <img src="${current.img}" alt="">
            </div>
        </div>`
    }
})

content_3_right_ontent_element.innerHTML = html;