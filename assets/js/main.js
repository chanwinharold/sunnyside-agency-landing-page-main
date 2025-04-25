const btnMenu = document.querySelector(".nav-menu")
const navMenu = document.querySelector(".hero .nav")

btnMenu.addEventListener("click", (e) => {
    navMenu.classList.toggle("hidden")
})

const navLinks = document.querySelectorAll(".nav-link")
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", (e) => {
        navLinks[i].classList.add("bg-none")
        for (let j = 0; j < navLinks.length; j++) {
            if (j != i ){
                navLinks[j].classList.remove("bg-none")
            }
        }
    })
}