function agregarTarea(){
    var elemento=document.getElementById("nueva-tarea").value;
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent = elemento;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
    //para eliminaer el texto del recuadro
    document.getElementById("nueva-tarea").value = "";

}
