const card = document.querySelector(".card")
const thefront = document.querySelector(".thefront")
const theback = document.querySelector(".theback")

thefront.addEventListener("click", ()=> {
    console.log("I clicked on the front")
    card.style.transform = "rotateY(180deg)"
})

theback.addEventListener("click", ()=> {
    console.log("I clicked on the back")
    card.style.transform = "rotateY(0deg)"
})
