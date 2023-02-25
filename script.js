class producto
{
    constructor(nombre,precio)
    {
        this.nombre=nombre;
        this.precio=precio;
    }
    sumaIva()
    {
        return this.precio * 1.21;
    }
}
const fideos = new producto("Fideos", 209);
const leche = new producto("Leche", 240);
const yogurt = new producto("Yogurt", 340);
const tapaDeTarta = new producto("Tarta", 190);
const cocaCola = new producto("Coca", 210);
const papasFritas = new producto("Papas Fritas", 170);
const mani = new producto("Mani", 90);
const pan = new producto("Pan", 200);

let productos=[fideos,leche,yogurt,tapaDeTarta,cocaCola,papasFritas,mani,pan];
alert("Buenas, bienvenido a mi simulador virtual de Despensa");
alert("Nuestros precios sin iva son los siguientes:");
const arrayProductosMenos200 = productos.filter(producto=> producto.precio < 200);
const arrayProductosMas200 = productos.filter(producto=> producto.precio > 200);
alert("Productos que tienen un valor inferior a $200");
arrayProductosMenos200.forEach((producto)=> 
{                                      
    alert(`${producto.nombre}`);
})
alert("Productos que tienen un valor superior a $200");
arrayProductosMas200.forEach((producto)=> 
{                                      
    alert(`${producto.nombre}`);
})

let sigue="si";
let subTotal;
let total=0;
while (sigue=="si"|| sigue=="Si")
{
    let productoComprado=prompt("¿Que producto le gustaria comprar (por favor poner primer letra mayúscula?");
    let cantidadProducto=parseInt(prompt("¿Cuantos les gustaria comprar?"));
    for(i=0;i<8;i++)
    {
        if(productoComprado==productos[i].nombre)
        {
            subTotal=(productos[i].sumaIva()*cantidadProducto);
        }
    }
    console.log(subTotal);
    total=total+subTotal;

    sigue=prompt("¿Le gustaria seguir comprando?");
}
console.log(total);
alert(`El total de su compra es ${total} pesos, ¡Gracias por su compra!`); 