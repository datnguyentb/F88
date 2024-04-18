let service_list = [
    {
        title: "Gói vay đăng ký xe máy",
        id: 1,
        active: true,
        img: "./assets/img/home-image-1.jpeg",
        content: [
            "Vay bằng đăng ký xe máy, không giữ xe, vừa có tiền vừa có xe đi",
            "15 phút có tiền",
            "Khoản vay lên đến 30 triệu",
            "Chi phí vay hợp lý"
        ],
    },
    {
        title: "Gói vay đăng ký ô tô",
        id: 1,
        active: false,
        img: "./assets/img/car.jpeg",
        content: [
            "Khoảng vay lên đến 2 tỷ. Chỉ cần đăng ký xe ô tô",
            "Vừa có tiền vừa có xe đi",
            "15 phút có tiền",
            "Chi phí vay thấp"
        ],
    },
    {
        title: "Bảo hiểm tài sản, con người",
        id: 1,
        active: false,
        img: "./assets/img/3.jpeg",
        content: [
            "Cung cấp đa dạng các sản phẩm bảo hiểm bình dân, đáp ứng mọi nhu cầu bảo vệ tài sản, sức khỏe, con người cho mọi khách hàng",
            "Trung tâm hỗ trợ thủ tục bồi thường nhanh chóng 24/24",
            "Hướng dẫn hồ sơ, giải đáp sản phẩm tại tất cả các cửa hàng F88 trên toàn quốc",
            "Nhanh chóng, chu đáo, tin cậy"
        ],
    },
];
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

const icon_check = '<i class="fa-duotone fa-circle-check"></i>';
let lis_elements = document.querySelectorAll(".hot-service .top-box li");
let h1_element = document.querySelector(".hot-service .bottom-box h1");
let ul_element = document.querySelector(".hot-service .bottom-box ul");
let img_element = document.querySelector(".hot-service .bottom-box img");


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


let length = service_list.length


