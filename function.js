const button = document.createElement("button");
button.innerText = "click me";
const handleClick = () => {
    alert('Click')
}

button.addEventListener('click', handleClick)

document.body.append(button)


const showText = () => 'hola mundo';

console.log(showText());

//funcion que retorna un objecto en una linea

const showObject = () => ({name: "Chris", age: 38})

console.log(showObject);