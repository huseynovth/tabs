const malesBtn = document.getElementById('maleBtn')
const males = document.querySelectorAll('.males')
const femalesBtn = document.getElementById('femalesBtn')
const females = document.querySelectorAll('.females')
const container = document.querySelector('.conatainer')
malesBtn.addEventListener('click', ()=>{
    females.forEach(female => female.style.opacity = '0')
    males.forEach(male => male.style.opacity = 1)
})
femalesBtn.addEventListener('click', ()=>{
    males.forEach(male => male.style.opacity = '0')
    females.forEach(female => female.style.opacity = 1)
    state = state == '1' ? '0' : '1'
    container.style.height = '390px'
})
