//CREAR UN CLASE Producto
//PROPIEDADES nombre, precio, stock


//METODOS
/*

get_datos: trae todos los datos del producto
get_stock: retorna true si existe stock disponible, sino retorna false.

*/

class Producto{
    constructor(nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

    //METODOS
    get_datos(){
        console.log("<----- DATOS DEL PRODUCTO-------->");
        console.log("Nombre: ",this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ",this.stock);
        console.log("");
    }

    get_stock() {
        if (this.stock > 0){
            return true
        }
        else{
            return false
        }
    }

    venta(cantidad){
        if (this.stock >=cantidad){
            console.log("Gracias por su compra");
            this.stock=this.stock-cantidad;
        }else{
            console.log("Solo tengo tantas unidades: ", this.stock);
        }

    }
}



let producto_uno = new Producto("Lampara",10000,3);
let producto_dos = new Producto("Radio",200,5);
let producto_tres = new Producto("Mouse",0,2);

producto_uno.get_datos();
producto_dos.get_datos();
producto_tres.get_datos();


//VENTA DE PRODUCTO//

//EL USUARIO QUIERE COMPRAR UNA LAMPARA ---> PUEDE VENIR DE UN PROMPT//

if (producto_uno.get_stock()){
    // TENGO STOCK PARA VENDER
    console.log("Tenemos stock del producto");
    let cantidad = prompt("Ingrese la cantidad de unidades que quiere comprar");
    cantidad = parseInt(cantidad);

    producto_uno.venta(cantidad);
    producto_uno.get_datos();
}else{
    console.log("No disponemos de stock del producto");
}
