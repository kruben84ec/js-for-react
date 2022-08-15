const title = document.createElement('h1')
title.innerText = "Hola mundo desde Js"
document.body.append(title)

const botton = document.createElement('button')
botton.innerText = 'click'

botton.addEventListener('click', ()=> {
    title.innerText = "Texto actualizado con js"
    alert("Se actualizo!")
})

document.body.append(botton)
