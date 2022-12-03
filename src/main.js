// const arrListProduct = [
//     {
//         img: "img/image 26.png",
//         name: "Big and Juicy Wagyu Beef Cheeseburger",
//         cate : 1
//     },
//     {
//         img: "img/image 26.png",
//         name: "Big and Juicy Wagyu Beef Cheeseburger",
//         cate : 1
//     }, {
//         img: "img/image 26.png",
//         name: "Big and Juicy Wagyu Beef Cheeseburger",
//         cate : 1
//     },
//     {
//         img: "img/image 27.png",
//         name: "Big and Juicr",
//         cate : 2
//     },
//     {
//         img: "img/image 27.png",
//         name: "Big and Juicy burger",
//         cate : 2
//     }, {
//         img: "img/image 27.png",
//         name: "Bigagyu Beef Cheeseburger",
//         cate : 2
//     }
// ];

// function showProduct(data) {
//     let Product_item = document.querySelector(".six");
//     Product_item.innerHTML = "";
//     if (Product_item) {
//         for (let item of data) {
//             Product_item.innerHTML += `
//             <div class="one">
//                 <img src="${item.img}" alt="" class="dishes_img">
//                 <h4> ${item.name} </h4>
//             <div class="one_text">
//                 <div>
//                     <img src="img/Timer.png" alt="">
//                     <p> 30 Minutes</p>
//                     <img src="img/ForkKnife.png" alt="">
//                     <p>Snack</p>
//                 </div>
//             </div>
//         </div>
//             `;
//         }
//     }
// }
// showProduct(arrListProduct);
// let filter = document.querySelector("#loc");

// function filterProduct(data) {
//     //dùng hàm filter() đề lọc các giá trị đúng
//     //hàm filter sẽ nhận vào 1 mảng và duyệt từ đầu đến hết mảng và trả về 1 mảng mới gồm các giá trị đúng
//     // hàm filter sẽ nhận vào 1 function gọi là calback
//     let _ga = data.filter(function(item) {
//         return item.cate == 1;
//     });
//     let _ca = data.filter(function(item) {
//         return item.cate == 2;
//     });
//     if (filter.value=="Ga") showProduct(_ga);
//     else if(filter.value == "Ca") showProduct(_ca);
//     else showProduct(arrListProduct);
// }
// // filter.addEventListener("change" , filterProduct(arrListProduct));



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();