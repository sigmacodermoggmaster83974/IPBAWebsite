const test = document.getElementById("move")
const list = document.getElementsByClassName("credCard")
let index = 0
list[0].classList.add("active")
test.addEventListener("click", () => {
index++
if (index >= list.length) {
index = 0
}
list[index]?.classList.add("active")
list[index-1]?.classList.remove("active")
if (index !== list.length-1) {
list[list.length - 1]?.classList.remove("active")
}
})