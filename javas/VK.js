const headers = document.querySelectorAll("[data-name='menu-title']");
console.log("headers", headers);

headers.forEach(function(item){
    item.addEventListener("click",headerClick)
});

function headerClick() {
    console.log("item",this.nextElementSibling);   this.nextElementSibling.classList.toggle("menu-body");
}
