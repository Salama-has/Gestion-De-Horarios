//declarar variables
var iprofesor=document.getElementById('cNombre');
var idia=document.getElementById('cDias');
var ihora=document.getElementById('cHora');
var iasignatura=document.getElementById('cAsignatura');

//when u click grabar
function guardaDatos(){

    var profesor=iprofesor.value;
    var dia=idia.value;
    var hora=ihora.value;
    var asignatura=iasignatura.value;
    if(profesor=='Fernando'&&asignatura=='DWEC'||profesor=='Daniel'&&asignatura=='Despliegue'||profesor=='Marian'&&asignatura=='DWES'||profesor=='Ana Gloria'&&asignatura=='DIW'){
        var clase={
            prof:profesor,
            asig:asignatura,
            day:dia,
            hour:hora
        };    
    
        var a=parseInt(clase.hour);//change string to a number
        var b=parseInt(clase.day);
        var tr=a+1;
        var td=b+2;
        //select tr depending on the tr value && the same for td
        var select='tr:nth-of-type('+tr+') td:nth-of-type('+td+')';
        var casilla=document.querySelector(select);
        casilla.innerText=clase.asig;
        casilla.class=clase;
        casilla.addEventListener('click',mostrarDatos,false);
    }else{
        alert("No se ha introducido bien el profesor o la asignatura");
    }
    
}
//click inside the box
function mostrarDatos(){
    iprofesor.value=this.class.prof;
    iasignatura.value=this.class.asig;
    idia.value=this.class.day;
    ihora.value=this.class.hour;

}