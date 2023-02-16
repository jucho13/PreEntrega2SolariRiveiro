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
const tapaDeTarta = new producto("Tapa de Tarta", 190);
const cocaCola = new producto("Coca Cola", 210);
const papasFritas = new producto("Papas Fritas", 170);
const mani = new producto("Mani", 90);
const pan = new producto("Pan", 200);

let productos=[fideos,leche,yogurt,tapaDeTarta,cocaCola,papasFritas,mani,pan];
alert("Buenas, bienvenido a mi simulador virtual de Despensa");
alert("Nuestros precios sin iva son los siguientes:");
for(i=0;i<8;i++)
{
    alert(`${productos[i].nombre} tiene un valor de ${productos[i].precio}`);
}
let sigue="si";
let subTotal;
let total=0;
while (sigue=="si")
{
    let productoComprado=prompt("¿Que producto le gustaria comprar?");
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