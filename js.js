const productos = [
    {nombre: "brandy", precio: 100000},
    {nombre: "ron", precio: 45000},
    {nombre: "cerveza", precio: 70000},
    {nombre: "whisky", precio: 250000},
    {nombre: "vodka", precio: 90000}
];

let carrito = [ ]
    

let seleccion = prompt( "Desea comprar algún producto Si o No? (tener en cuenta que el enunciado es en minuscula)")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa  si o no ")
    seleccion = prompt("Hola desea comprar algo Si o No ")
}

if(seleccion === "si") {
    alert("A continuacion nuestra lista de productos (tener en cuenta que el enunciado es en minuscula)")
   let todosLosProductos = productos.map(
    (producto) => producto.nombre + " " +  " $ " + producto.precio 
   );
   alert(todosLosProductos.join(" |*| "))
} else if(seleccion == "no"){
    alert("Mil gracias por visitar nuestro sitio, te esperamos pronto!!!!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "brandy" || producto == "ron" || producto == "cerveza"
    || producto == "whisky" || producto == "vodka"){
        switch(producto){
            case "brandy":
                 precio = 100000;
                 break;

            case "ron":
                 precio = 45000;
                 break; 

            case "cerveza":
                 precio = 70000;
                 break;  

            case "whisky":
                 precio = 250000;
                break;   

            case "vodka":
                precio = 90000;
                break;   
                
            default:
                break;
                 

        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }   else{
        alert("No tenemos el producto que específica ó no ha introducido ningún producto")
    }
    alert("Por favor ingresa  si o no ")
    seleccion = prompt( "Desea seguir comprando otro producto Si o No ? (tener en cuenta que el enunciado es en minuscula)")

    while(seleccion === "no"){
        alert ("Gracias por su compra, te esperamos pronto");
        carrito.forEach((carritoFinal)=> {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            Total a pagar por producto: ${ carritoFinal.unidades * carritoFinal.precio}`)
        })

        break;
    }
}

// acu = acumulador
//produ = producto

const total = carrito.reduce((acu, produ)=> acu + produ.precio * produ.unidades, 0);
console.log( `EL TOTAL A PAGAR ES : $ ${total} `)