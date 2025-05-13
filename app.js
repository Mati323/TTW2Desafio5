let productos = ["Bicicleta, Televisión, Monitor, Teclado"]

console.log(productos)

for (let producto in productos){
    console.log(productos[producto])
}

productos.push("Escritorio")
console.log(productos)

productos.pop()
console.log(productos)