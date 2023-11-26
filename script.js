const button = document.querySelector("#theme-button")
const sectionDark = document.querySelector(".bg-black")


button.addEventListener("click", function(e) {
    e.preventDefault()

    console.log("button clicked")

    sectionDark.remove("bg-black")
})