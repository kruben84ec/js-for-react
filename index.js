const user = {
    name: "joe",
    age: 30
}

function printInfo(user) {
    const {name, age} = user;
    return  "<h3>Hola "+name+", tu edad es: "+age+"</h3>"
}

document.body.innerHTML = printInfo(user)