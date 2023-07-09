async function fetchProductImages(productId){

    let url = "https://dog.ceo/api/breed/" + productId + "/images";

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.log("Error: " + error);
    }

}

function mostrarProductos(elemento){

    let productId = elemento.getAttribute("value");
    let contenedor_fotos = document.getElementById('contenedor_imagenes');

    clearContainer(contenedor_fotos);

    fetchProductImages(productId).then(function(productos) {

        try {
        
            console.log(productos);
            fillContainer(contenedor_fotos, productos);

        } catch (error){

            console.log("Error: " + error);
    
        }

    }); 


}

function fillContainer(contenedor_fotos, productos){

    for( let i = 0 ; i < productos.length; i++ ){

        let innerDiv = document.createElement('div');
        innerDiv.className = 'container';

        let image = document.createElement('img');
        image.className = 'w-80 h-80 image';
        image.src = productos[i];

        innerDiv.appendChild(image);   
        contenedor_fotos.appendChild(innerDiv);

    }

}

function clearContainer(contenedor_fotos){

    var first = contenedor_fotos.firstElementChild;
    while (first) {
        first.remove();
        first = contenedor_fotos.firstElementChild;
    }

}