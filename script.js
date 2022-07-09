// menu déroulant
let variable = document.querySelectorAll('button')
let menu = document.querySelectorAll('.dropdown-content')
let liens = document.querySelectorAll('a')

for (let i = 0; i < liens.length; i++) {
    variable[i].addEventListener('click', function () {
        menu[i].classList.toggle('show')
        liens.forEach((lien) => {
            lien.addEventListener('click', function () {
                menu[i].classList.remove('show')

            })
        })
    })
}






