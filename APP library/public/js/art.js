const db = firebase.firestore();
//constructor de la clase
class Art{
    constructor(Autor, Year, Titulo, Date, Asc, Url){
        this.Autor = Autor;
        this.Year = Year;
        this.Titulo = Titulo;
        this.Date= Date;
        this.Asc = Asc;
        this.Url = Url;
    }
}




//Metodos de interfaz
class UI {
    addproduct(art){
        const apaa = document.getElementById("product2");
        const elementh = document.createElement("div");
        elementh.innerHTML = `
        <div class="card">
                <div class="card-body">
                    <strong> Bibliografia</strong>: ${art.Autor}. (${art.Year}). ${art.Titulo}. ${art.Date}, de  ${art.Asc}. Recuperado de: ${art.Url}
                </div>
        </div>
        `;
        apaa.appendChild(elementh);
        
    }
    resetForm(){
        document.getElementById("product").reset();
    }
    showMessage(){
        alert("faltan campos por rellenar");

    }
}
const boton1 =document.getElementById("product");

//Dom
boton1.addEventListener("submit", async (e)=>{
    e.preventDefault();
//Obtiene el dato desde el html
    const Autor = document.getElementById("Autor").value;
    const Year = document.getElementById("Year").value;
    const Titulo = document.getElementById("Titulo").value;
    const Date = document.getElementById("Date").value;
    const Asc = document.getElementById("Asc").value;
    const Url = document.getElementById("Url").value;

    if (Autor.value = null){
     ui.showMessage();
    }
    else{
        //muestra el dato en consola
    const art = new Art(Autor, Year, Titulo, Date, Asc, Url);
    const ui = new UI();
    ui.addproduct(art);
    ui.resetForm();


    
    //mensaje de formulario enviado
const response = await db.collection("apaartc").doc().set({
    Autor,
    Year,
    Titulo,
    Date,
    Asc,
    Url
})
    }



});
