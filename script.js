let listItem = document.querySelectorAll(".list-item");
console.log(listItem);
const mainDiv = document.querySelector("#main-div");
// console.log(mainDiv);
// console.log(mainDiv.children[0])

const img = document.querySelector('img');

// console.log("img");
img.setAttribute("alt", "changed.jpg");
// img.setAttribute('src', "new img link");

 listItem = document.querySelectorAll(".list-item");

listItem[0].classList.add("bg-aqua");

listItem.forEach(item => {
    console.log(item);
    item.style.color = "red";
});
// another example
listItem.forEach(item => {
    console.log(item);
    item.style.backgroundColor = "lightblue";
    item.style.margin = "5px";
    item.style.padding = "5px";
});


const btn = document.getElementById("click-me-btn");
const countText = document.getElementById("count");
console.log(countText);


//  let currentCount = 0  [note: ekhane currentCount 0 theke shuru korte chaile simply function er baire ba loop er baire current count 0 set korlei hobe kintu currentCount er man nirdishto vabe #count p tag a jei shongkha ache shekhan theke count start korte chaile function er vetore parseInt(countText.innerText) formula follow korte hobe tobe ekhtreo parseInt bebohar mandatory noy]


btn.addEventListener('click', function () {
    let currentCount = parseInt(countText.innerText);
    currentCount++;
    countText.innerText = currentCount
})