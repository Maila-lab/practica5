// CLASES//

class Alumno_coder{
    constructor(nombre,apellido, dni, nota_uno, nota_dos){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.nota_uno=nota_uno;
        this.nota_dos= nota_dos;
    }

    //METODOS //

    saludar(){
        console.log("Hola buenas noches!");
    }

    get_datos(){
        console.log("<----- DATOS ALUMNO/A ------>");
        console.log("NOMBRE: ",this.nombre);
        console.log("ALLIDO: ",this.apellido);
        console.log("DNI: ",this.dni);
        console.log(" ");
    }

    get_notas(){
        console.log("<----- NOTAS DEL ALUMNO/A ------>");
        console.log("NOMBRE: ",this.nombre);
        console.log("NOTA UNO: ",this.nota_uno);
        console.log("NOTA DOS: ",this.nota.dos);
        console.log(" ");
    }

    set_notas_uno(nota){
        if(nota > 0 && nota <= 10){
            this.nota_uno=nota;
        }
    }
    set_notas_dos(nota){
        if(nota > 0 && nota <= 10){
            this.nota_uno=nota;
        }
    }
}


let alumno_uno= new Alumno_coder("Jose","Lopez",543154);
let alumno_dos =new Alumno_coder("Laura","Romero",56656);
//console.log(alumno_uno);
//console.log("nombre: ",alumno_uno.nombre);

//MUESTRO LOS DATOS
alumno_uno.get_datos();
alumno_dos.get_datos();

//MUESTRO LAS NOTAS
alumno_uno.get_notas;
alumno_dos.get_notas;

//SALUDAN
alumno_uno.saludar();
alumno_dos.saludar();


// PRIMER PARCIAL
//alumno_uno.nota_uno=10;
//alumno_dos.nota_uno=11;

alumno_uno.set_notas_uno(10);
alumno_uno.set_notas_uno(8);


//SEGUNDO PARCIAL
alumno_uno.set_notas_dos(7);
alumno_uno.set_notas_dos(9);

//MUESTRO LA NOTAS DESPUES DEL PARCIAL
alumno_uno.get_notas;
alumno_dos.get_notas;